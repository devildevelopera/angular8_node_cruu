module.exports = function(sd, app){
	/*
	*	Model
	*/
		var JobSchema = new sd.Schema({
			org: { type: ObjectId, ref: 'Organizations'},
			event: { type: ObjectId, ref: 'Events'},
			active: { type: Boolean },
			rate: { type: Number },
			fixed: { type: Number },
			extra: { type: Number },
			day: String,
			date: {},
			times: {},
			apply: {},
			position: { type: String },

			force: { type: Boolean },
			assigned: { type: ObjectId, ref: 'Users'},
			confirm: { type: Boolean },
			accepted: { type: Boolean },
			declined: { type: Boolean },
			SoftAcceptLink: { type: Boolean },
			SoftDenyLink: { type: Boolean },

			comment: { type: String },
			comments: {},

			need_hotel: { type: Boolean },
			hotel: { type: String },

				title: { type: String },
				venueName: { type: String },
				
		}, { timestamps: true });
		var Job = sd.mongo.model('Job', JobSchema, 'Job');
		sd.Job = Job;
		Job.find({}).populate({
			path: 'event',
			select: 'startDate endDate'
		}).select('event day').exec(function(err, docs){
			for (var i = 0; i < docs.length; i++) {
				if(!docs[i].event){
					Job.remove({_id: docs[i]._id}, function(){
						console.log('job removed');
					});
					continue;
				}
				let startDate = new Date(docs[i].event.startDate).getTime()-86400000;
				let endDate = new Date(docs[i].event.endDate).getTime()+86400000;
				let day = new Date(docs[i].day).getTime();
				if(day < startDate || day > endDate){
					Job.remove({_id: docs[i]._id}, function(){
						console.log('job removed');
					});
				}
			}
		});
		/*
		Job.find({}).populate('event assigned').exec(function(err, jobs){
			console.log(jobs.length);
			for (var i = 0; i < jobs.length; i++) {
				if(!jobs[i].event && jobs[i].assigned.email == 'design.love270@gmail.com'){
					console.log(i, jobs[i]);
					jobs[i].remove(()=>{});
				}
			}
		});
		//*/
		// Job.find({}, function(err, docs){
		// 	console.log(docs);
		// })
		var router = sd.router('/api/job');
	/*
	*	Routes
	*/
		router.get("/get", sd.ensure, function (req, res) {
			let _ids = sd.to_id(req.user.organizations);
			Job.find({
				org: {
					$in: _ids
				}
			}, function(err, jobs){
				res.json(jobs);
			});
		});
		router.post("/comment", sd.ensure, function (req, res) {
			let _ids = sd.to_id(req.user.organizations);
			Job.findOne({
				org: {
					$in: _ids
				},
				_id: req.body._id
			}, function(err, job){
				if(err || !job) return res.send(false);
				if(!job.comments) job.comments={};
				job.comments[req.user.id] = req.body.comment;
				job.markModified('comments');
				job.save(function(){
					res.json(true);
				});
			});
		});
		router.post("/create", sd.ensure, function (req, res) {
			let _ids = sd.to_id(req.user.organizations);
			delete req.body._id;
			if(_ids.indexOf(req.body.org)>=0){
				if(!req.body.assigned) req.body.assigned=null;
				Job.create(req.body, function(err, created){
					if(err || ! created) return res.json(false);
					if(created.assigned) changed_assigned(req, created, created.assigned);
					res.json(created);
				});
				if(req.body.__ignore_email || req.body.assigned || !sd.mailerApiInstance) return;
				sd.User.find({
					'organizations._positions' : req.body.position,
					'organizations._id' : req.body.org,
					password: { $exists: true }
				}, function(err, users) {
					if(err || !users || !users.length) return;
					var sendSmtpEmail = new sd.mailerSDK.SendSmtpEmail();
					for (var i = 0; i < users.length; i++) {
						sendSmtpEmail = {
							to: [{
								email: users[i].email
							}],
							templateId: 1,
							params: {
								JobsLink: req.get('host')+'/jobs'
							}
						};
						let sender = sd.sender(req.user);
						if(sender){
							sendSmtpEmail.sender = sender;
						}
						sd.mailerApiInstance.sendTransacEmail(sendSmtpEmail).then(function(data) {
							//console.log(data);
						}, function(error) {
							//console.error(error);
						});
					}
				});
			}else{
				res.json(false);
			}
		});
		router.post("/apply", sd.ensure, function (req, res) {
			let _ids = sd.to_id(req.user.organizations);
			if(_ids.indexOf(req.body.org)>=0){
				Job.findOne({
					_id: req.body._id
				}, function(err, doc){
					if(err || !doc) return res.json(false);
					if(!doc.apply) doc.apply={};
					doc.apply[req.user._id] = req.body.apply;
					doc.markModified('apply');
					doc.save(function(){
						res.json(true);
					});
				});
			}else{
				res.json(false);
			}
		});
		var confirm = function(req, res){
			let query = {
				_id: req.params.job_id
			}
			if(req.params.assigned){
				query.assigned = req.params.assigned;
			}else if(req.user){
				query.assigned = req.user._id;
			}else {
				return res.redirect('/redirect/api/job/accept/'+req.params.job_id);
			}
			Job.findOne(query, function(err, doc){
				if(err || !doc) return res.redirect('/jobs');
				doc.confirm = true;
				doc.save(function(){
					res.redirect('/jobs');
				});
			});
		}
		app.get("/confirm/:job_id", confirm);
		app.get("/confirm/:job_id/:assigned", confirm);
		var accept = function(req, res){
			let query = {
				_id: req.params.job_id
			}
			if(req.params.assigned){
				query.assigned = req.params.assigned;
			}else if(req.user){
				query.assigned = req.user._id;
			}else{
				return res.redirect('/redirect/api/job/accept/'+req.params.job_id);
			}
			Job.findOne(query, function(err, doc){
				if(err || !doc) return res.redirect('/jobs');
				doc.accepted = true;
				doc.force = false;
				doc.save(function(){
					res.redirect('/jobs');
				});
				if(!sd.mailerSDK||!sd.mailerSDK.SendSmtpEmail) return;
				sd.Event.findOne({
					_id: doc.event
				}, function(err, event){
					sd.User.findOne({
						organizations: {
							$elemMatch: {
								_id: doc.org
							}
						},
						isAdmin: true
					}, function (err, user) {
						var sendSmtpEmail = new sd.mailerSDK.SendSmtpEmail();
						sendSmtpEmail = {
							to: [{
								email: user.email
							}],
							templateId: 17,
							params: {
								CrewName: req.user.firstName + ' ' + req.user.lastName,
								EventName: event.title,
								calltime: doc.times.from&&doc.times.from.time,
								position: doc.position
							}
						};
						let sender = sd.sender(req.user);
						if(sender){
							sendSmtpEmail.sender = sender;
						}
						sd.mailerApiInstance.sendTransacEmail(sendSmtpEmail).then(function(data) {
							console.log(data);
						}, function(error) {
							console.error(error);
						});
					});
				});
			});
		}
		app.get("/accept/:job_id", accept);
		app.get("/accept/:job_id/:assigned", accept);
		router.get("/accept/:job_id", accept);
		router.get("/accept/:job_id/:assigned", accept);
		var decline = function (req, res) {
			let query = {
				_id: req.params.job_id
			}
			if(req.params.assigned){
				query.assigned = req.params.assigned;
			}else if(req.user){
				query.assigned = req.user._id;
			}else{
				return res.redirect('/redirect/api/job/accept/'+req.params.job_id);
			}
			Job.findOne(query, function(err, doc){
				if(err || !doc) return res.redirect('/jobs');
				doc.declined = true;
				doc.force = false;
				doc.save(function(){
					res.redirect('/jobs');
				});
				if(!sd.mailerSDK||!sd.mailerSDK.SendSmtpEmail) return;
				sd.Event.findOne({
					_id: doc.event
				}, function(err, event){
					sd.User.findOne({
						organizations: {
							$elemMatch: {
								_id: doc.org
							}
						},
						isAdmin: true
					}, function (err, user) {
						var sendSmtpEmail = new sd.mailerSDK.SendSmtpEmail();
						sendSmtpEmail = {
							to: [{
								email: user.email
							}],
							templateId: 18,
							params: {
								CrewName: req.user.firstName + ' ' + req.user.lastName,
								EventName: event.title,
								calltime: doc.times.from&&doc.times.from.time,
								position: doc.position
							}
						};
						let sender = sd.sender(req.user);
						if(sender){
							sendSmtpEmail.sender = sender;
						}
						sd.mailerApiInstance.sendTransacEmail(sendSmtpEmail).then(function(data) {
							console.log(data);
						}, function(error) {
							console.error(error);
						});
					});
				});
			});
		}
		app.get("/decline/:job_id", decline);
		app.get("/decline/:job_id/:assigned", decline);
		router.get("/decline/:job_id", decline);
		router.get("/decline/:job_id/:assigned", decline);
		var SoftAcceptLink = function (req, res) {
			let query = {
				_id: req.params.job_id
			}
			if(req.params.assigned){
				query.assigned = req.params.assigned;
			}else if(req.user){
				query.assigned = req.user._id;
			}else{
				return res.redirect('/redirect/api/job/accept/'+req.params.job_id);
			}
			Job.findOne(query, function(err, doc){
				if(err || !doc) return res.redirect('/jobs');
				doc.SoftAcceptLink = true;
				doc.force = false;
				doc.save(function(){
					res.redirect('/jobs');
				});
			});
		}
		app.get("/SoftAcceptLink/:job_id", SoftAcceptLink);
		app.get("/SoftAcceptLink/:job_id/:assigned", SoftAcceptLink);
		router.get("/SoftAcceptLink/:job_id", SoftAcceptLink);
		router.get("/SoftAcceptLink/:job_id/:assigned", SoftAcceptLink);
		var SoftDenyLink = function (req, res) {
			let query = {
				_id: req.params.job_id
			}
			if(req.params.assigned){
				query.assigned = req.params.assigned;
			}else if(req.user){
				query.assigned = req.user._id;
			}else{
				return res.redirect('/redirect/api/job/accept/'+req.params.job_id);
			}
			Job.findOne(query, function(err, doc){
				if(err || !doc) return res.redirect('/jobs');
				doc.SoftDenyLink = true;
				doc.force = false;
				doc.save(function(){
					res.redirect('/jobs');
				});
			});
		}
		router.get("/SoftDenyLink/:job_id", SoftDenyLink);
		router.get("/SoftDenyLink/:job_id/:assigned", SoftDenyLink);
		const changed_assigned = (req, doc, assigned, templateId=9)=>{
			if(!sd.mailerSDK || !sd.mailerSDK.SendSmtpEmail || !sd.mailerApiInstance) return;
			sd.Event.findOne({
				_id: doc.event
			}).populate('location').exec(function(err, event){
				if(err || !event) return;
				sd.User.findOne({
					_id: assigned
				}, function(err, user){
					if(err || !user) return;
					var sendSmtpEmail = new sd.mailerSDK.SendSmtpEmail();
					var SoftAcceptLink = req.get('host')+'/SoftAcceptLink/'+doc._id;
					var SoftDenyLink = req.get('host')+'/SoftDenyLink/'+doc._id;
					var accept = req.get('host')+'/accept/'+doc._id;
					var decline = req.get('host')+'/decline/'+doc._id;
					if(doc.assigned){
						SoftAcceptLink += '/'+doc.assigned;
						SoftDenyLink += '/'+doc.assigned;
						accept += '/'+doc.assigned;
						decline += '/'+doc.assigned;
					}
					sendSmtpEmail = {
						to: [{
							email: user.email
						}],
						templateId: templateId,
						params: {
							//EventDates: templateId==10&&doc.day||req.body.__event_dates,
							EventDates: doc.day,
							message: templateId==10&&(req.body.message||'N/A')||null,
							EventName: event.title,
							calltime: doc.times.from.time,
							position: doc.position,
							LocationName: event.location.venueName,
							AddressLine1: event.location.address,
							AddressLine2: event.location.address2,
							CityStateZip: event.location.City,
							LinkText: req.get('host')+'/event-details?eventId='+event._id,
							SoftAcceptLink: SoftAcceptLink,
							SoftDenyLink: SoftDenyLink,
							AcceptLink: accept,
							DenyLink: decline
						}
					};
					let sender = sd.sender(req.user);
					if(sender){
						sendSmtpEmail.sender = sender;
					}
					sd.mailerApiInstance.sendTransacEmail(sendSmtpEmail).then(function(data) {
						console.log(data);
					}, function(error) {
						console.error(error);
					});
				});
			});
		}
		router.post("/update", sd.ensure, function (req, res) {
			let _ids = sd.to_id(req.user.organizations);
			if(_ids.indexOf(req.body.org)>=0){
				Job.findOne({
					_id: req.body._id
				}, function(err, doc){
					if(err || !doc) return res.json(false);
					if(doc.assigned != req.body.assigned && req.body.assigned){
						doc.accepted = false;
						doc.declined = false;
						changed_assigned(req, doc, req.body.assigned);
					}
					if(doc.assigned != req.body.assigned && doc.assigned){
						changed_assigned(req, doc, doc.assigned, 10);
					}
					doc.assigned = req.body.assigned;
					doc.need_hotel = req.body.need_hotel;
					doc.hotel = req.body.hotel;
					doc.force = req.body.force;
					doc.comment = req.body.comment;
					doc.rate = req.body.rate;
					doc.fixed = req.body.fixed;
					doc.extra = req.body.extra;
					doc.color = req.body.color;
					doc.active = req.body.active;
					doc.name = req.body.name;
					doc.category = req.body.category;
					doc.save(function(){
						res.json(true);
					});
				});
			}else{
				res.json(false);
			}
		});
		router.post("/delete", sd.ensure, function (req, res) {
			let _ids = sd.to_id(req.user.organizations);
			Job.findOne({
				_id: req.body._id,
				org: {
					$in: _ids
				}
			}, function(err, doc){
				if(err || !doc) return res.json(false);
				doc.remove(()=>{
					res.json(true);
					changed_assigned(req, doc, doc.assigned, 10);
				});
			});
		});
		router.post("/inform", sd.ensure, function (req, res) {
			if(!sd.mailerSDK||!sd.mailerSDK.SendSmtpEmail||!sd.mailerApiInstance) return res.json(true);
			var sendSmtpEmail = new sd.mailerSDK.SendSmtpEmail();
			let to = [];
			for (var i = req.body.users.length - 1; i >= 0; i--) {
				to.push({
					email: req.body.users[i]
				});
			}
			if(req.body.dates){
				let now = new Date().getFullYear();
				req.body.dates = req.body.dates.split('/'+(now-1)).join('');
				req.body.dates = req.body.dates.split('/'+(now)).join('');
				req.body.dates = req.body.dates.split('/'+(now+1)).join('');
			}
			sendSmtpEmail = {
				to: to,
				templateId: 19,
				params: {
					EventDates: req.body.dates,
					EventName: req.body.title,
					subject: req.body.subject,
					message: req.body.message
				}
			};
			let sender = sd.sender(req.user);
			if(sender){
				sendSmtpEmail.sender = sender;
			}
			sd.mailerApiInstance.sendTransacEmail(sendSmtpEmail).then(function(data) {
				res.json(true);
			}, function(error) {
				res.json(true);
			});
		});
	/*
	*	End of
	*/
}