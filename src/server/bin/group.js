module.exports = function(sd, app){
	/*
	*	Model
	*/
	    var GroupSchema = new sd.Schema({
	    	name: String,
		    labels: [{
		    	_id: { type: ObjectId, ref: 'Label'},
		    	name: String
		    }],
		    org: { type: ObjectId, ref: 'Organizations'},
		    users: [{ type: ObjectId, ref: 'User'}]
	    }, { timestamps: true });
	    var Group = sd.mongo.model('Group', GroupSchema, 'Group');
	    sd.Group = Group;
		var router = sd.router('/api/group');
	/*
	*	Routes
	*/
	    router.get("/get", sd.ensure, function (req, res) {
			let _ids = sd.to_id(req.user.organizations);
	        Group.find({
	        	org: {
					$in: _ids
				}
	        }, function(err, groups){
	            res.json(groups);
	        });
	    });
		router.post("/create", sd.ensure, function (req, res) {
			let _ids = sd.to_id(req.user.organizations);
			if(_ids.indexOf(req.body.org)>=0){
				Group.create(req.body, function(err, created){
					res.json(created);
				});
			}else{
				res.json(false);
			}
		});
	    router.post("/update", sd.ensure, function (req, res) {
	    	let _ids = sd.to_id(req.user.organizations);
			if(_ids.indexOf(req.body.org)>=0){
		        Group.findOne({
		            _id: req.body._id
		        }, function(err, doc){
		            if(err || !doc) return res.json(false);
		            doc.name = req.body.name;
		            doc.users = req.body.users;
		            doc.labels = req.body.labels;
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
		        Group.deleteOne({
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


