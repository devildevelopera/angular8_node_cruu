module.exports = function(sd, app){
	/*
	*	Model
	*/
		var Rate = sd.mongo.model('Rates', new sd.Schema({
		    org: { type: ObjectId, ref: 'Organizations'},
		    event: { type: ObjectId, ref: 'Event'},
		    user: { type: ObjectId, ref: 'User'},
		    day: { type: String },
		    code: { type: String },
		    rate: { type: Number }
		}, { timestamps: true }), 'Rates');
		sd.Rate = Rate;
		var router = sd.router('/api/rate');
	/*
	*	Routes
	*/
		router.get('/get', sd.ensure, function(req, res){
			let _ids = [];
			for (var i = 0; i < req.user.organizations.length; i++) {
				_ids.push(req.user.organizations[i]._id);
			}
			Rate.find({
				org: {
					$in: _ids
				}
			}).exec(function(err, docs){
				res.json(docs);
			});
		});
		router.post('/create', sd.ensure, function(req, res){
			req.body.user = req.user._id;
			req.body.org = req.user.organizations[0]._id;
			Rate.create(req.body, function(err, doc){
				res.json(doc);
			});
		});
	    router.post("/update", sd.ensure, function (req, res) {
	    	let _ids = sd.to_id(req.user.organizations);
			if(_ids.indexOf(req.body.org)>=0){
		        Rate.findOne({
		            _id: req.body._id
		        }, function(err, doc){
		            if(err || !doc) return res.json(false);
		            doc.rate = req.body.rate;
		            doc.save(function(){
		                res.json(true);
		            });
		        });
			}else{
				res.json(false);
			}
	    });
	/*
	*	End of
	*/
}