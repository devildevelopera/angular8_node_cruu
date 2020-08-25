module.exports = function(sd, app){
	/*
	*	Model
	*/
	    var LabelSchema = new sd.Schema({
		    org: { type: ObjectId, ref: 'Organizations'},
	        name: { type: String },
	        color: { type: String },
	        category: { type: String }
	    }, { timestamps: true });
	    var Label = sd.mongo.model('Label', LabelSchema, 'Label');
	    sd.Label = Label;
		var router = sd.router('/api/label');
	/*
	*	Routes
	*/
	    router.get("/get", sd.ensure, function (req, res) {
			let _ids = sd.to_id(req.user.organizations);
	        Label.find({
	        	org: {
					$in: _ids
				}
	        }, function(err, labels){
	            res.json(labels);
	        });
	    });
		router.post("/create", sd.ensure, function (req, res) {
			let _ids = sd.to_id(req.user.organizations);
			if(_ids.indexOf(req.body.org)>=0){
				Label.create(req.body, function(err, created){
					res.json(created);
				});
			}else{
				res.json(false);
			}
		});
	    router.post("/update", sd.ensure, function (req, res) {
	    	let _ids = sd.to_id(req.user.organizations);
			if(_ids.indexOf(req.body.org)>=0){
		        Label.findOne({
		            _id: req.body._id
		        }, function(err, doc){
		            if(err || !doc) return res.json(false);
		            doc.color = req.body.color;
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
			if(_ids.indexOf(req.body.org)>=0){
		        Label.remove({
		            _id: req.body._id
		        }, function(err){
		            res.json(true);
		        });
			}else{
				res.json(false);
			}
	    });
	/*
	*	End of
	*/
}