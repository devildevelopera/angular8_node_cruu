module.exports = function(sd, app){
	/*
	*	Model
	*/
		var OrganizationSchema = new sd.Schema({
			name: { type: String },
			logo: { type: String },
			email: { type: String },
			inventory: { type: Object },
			positions: { type: Object },
			locations: [{ type: ObjectId, ref: 'Locations' }]
		}, { timestamps: true });
		var Organization = sd.mongo.model('Organizations', OrganizationSchema, 'Organizations');
		sd.Organization = Organization;
		sd._org = {};
		sd._org_email = {};
		var router = sd.router('/api/org');
	/*
	*	Email Management
	*/
		function validateEmail(email) {
			const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			return re.test(String(email).toLowerCase());
		}
		Organization.find({}, function(err, orgs){
			for (var i = 0; i < orgs.length; i++) {
				sd._org[orgs[i].id] = orgs[i];
				if(validateEmail(orgs[i].email)){
					sd._org_email[orgs[i].id] = orgs[i].email;
				}
			}
		});
	/*
	*	Routes
	*/
		router.get('/get', sd.ensure, function(req, res){
			let _ids = [];
			for (var i = 0; i < req.user.organizations.length; i++) {
				_ids.push(req.user.organizations[i]._id);
			}
			Organization.find({
				_id: {
					$in: _ids
				}
			}).populate('locations').exec(function(err, docs){
				res.json(docs);
			});
		});
		router.post('/update', sd.ensure, function(req, res){
			for (var i = 0; i < req.body.locations.length; i++) {
				req.body.locations[i] = req.body.locations[i]._id;
			}
			Organization.findOne({
				_id: req.body._id
			}, function(err, doc){
				doc.name = req.body.name;
				doc.logo = req.body.logo;
				doc.email = req.body.email;
				doc.inventory = req.body.inventory;
				doc.positions = req.body.positions;
				doc.locations = req.body.locations;
				for (var i = doc.locations.length - 1; i >= 0; i--) {
					if(!doc.locations[i]) doc.locations.splice(i, 1);
				}
				sd._org[doc._id] = doc;
				if(validateEmail(doc.email)){
					sd._org_email[doc.id] = doc.email;
				}
				doc.save(function(){
					res.json(doc);
				});
			});
		});
		app.post("/api/updateOrganization/:orgId", function (req, res) {
		    function updateOrganization(organizationId, organization) {
		        Organization.findByIdAndUpdate(organizationId, organization,
		            {new: true}).populate('locations').exec(
		            function(err, data) {
		                if (err) {
		                    res.send(err);
		                } else {
		                    res.send({message: 'Update Successful', data: data});
		                }
		        });
		    };
		    //Update the existing location then organization
		    if(req.body.updatedLocation) {
		        sd.Location.findByIdAndUpdate(req.body.updatedLocation._id,
		            req.body.updatedLocation, {new: true}).exec()
		        .then(function(updatedLocation) {
		            updateOrganization(req.params.orgId, req.body);
		        })
		    // Add a new location and attach it to the organizations
		    } else if(req.body.newLocations) {
		        sd.Location.insertMany(req.body.newLocations)
		        .then(function(saveLocations) {
		            if(req.body.locations) {
		                req.body.locations = req.body.locations.concat(saveLocations);
		            } else {
		                req.body.locations = saveLocations;
		            }
		            updateOrganization(req.params.orgId, req.body);
		        })
		    //No location data is needed, just update the rest of the organization
		    } else {
		        updateOrganization(req.params.orgId, req.body);
		    }
		});
		app.get("/api/getOrganization/:orgId", function (req, res) {
		    Organization.findOne({
		        _id: req.params.orgId
		    }).populate('locations').exec( function (err, data) {
		        if (err) {
		            res.send(err);
		        }
		        else {
		            res.send(data);
		        }
		    });
		});
	/*
	*	Inform
	*/
		router.post("/inform", sd.ensure, function (req, res) {
			if(!sd.mailerSDK || !sd.mailerSDK.SendSmtpEmail||!sd.mailerApiInstance) return res.json(true);
			var sendSmtpEmail = new sd.mailerSDK.SendSmtpEmail();
			sendSmtpEmail = {
				sender: {
					email: 'jnunnup@gmail.com'
				},
				to: req.body.to,
				templateId: 21,
				params: {
					OrgName: req.body.OrgName,
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
				res.json(error);
			});
		});
	/*
	*	End of
	*/
}