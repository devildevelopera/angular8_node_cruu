module.exports = function(sd, app){
	/*
	*	Model
	*/
		var LocationSchema = new sd.Schema({
		    venueName: { type: String },
		    address: { type: String },
		    address2: { type: String },
		    city: { type: String },
		    zipCode: { type: String },
		    state: { type: String }
		}, { timestamps: true });
		var Location = sd.mongo.model('Locations', LocationSchema, 'Locations');
		sd.Location = Location;
		var router = sd.router('/api/location');
	/*
	*	Routes
	*/
		router.get('/get', sd.ensure, function(req, res){
			Location.find({}, function(err, docs){
				if(err || !docs) return res.json([]);
				res.json(docs);
			});
		});
		router.post('/create', sd.ensure, function(req, res){
			Location.create(req.body, function(err, doc){
				if(err || !doc) return res.json(false);
				res.json(doc);
			});
		});
	    router.post("/update", sd.ensure, function (req, res) {
			Location.findOne({
				_id: req.body._id
			}, function(err, doc){
				if(err || !doc) return res.json(false);
				doc.venueName = req.body.venueName;
				doc.address = req.body.address;
				doc.address2 = req.body.address2;
				doc.city = req.body.city;
				doc.zipCode = req.body.zipCode;
				doc.state = req.body.state;
				doc.save(function(){
					res.json(true);
				});
			});
	    });
	/*
	*	End of
	*/
}