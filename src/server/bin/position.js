module.exports = function(sd, app){
	/*
	*	Model
	*/
		var ConfigSchema = new sd.Schema({
		    organizationId: { type: ObjectId, ref: 'Organizations'}
		}, {strict: false, versionKey: false, timestamps: true });
		var Config = sd.mongo.model('PositionConfig', ConfigSchema, 'PositionConfig');
		sd.Config = Config;
		var router = sd.router('/api/position');
	/*
	*	Routes
	*/
		app.get("/api/getConfig", function(req, res) {
		    Config.find({}, function(err, data) {
		        if (err) {
		            res.send(err);
		        } else {
		            res.send(data)
		        }
		    });
		});
		app.get("/api/getConfig/:organizationId", function(req, res) {
		    Config.findOne({organizationId: ObjectId(req.params.organizationId)},
		        {organizationId: 0, _id: 0, createdAt: 0, updatedAt: 0},
		      function(err, data) {
		        if (err) {
		            res.send(err);
		        } else {
		            res.send(data)
		        }
		    });
		});
		app.post("/api/saveConfig", function (req, res) {
		    if (req.body._id == null) {
		        req.body._id = ObjectId();
		    }
		    Config.findByIdAndUpdate(req.body._id, req.body,
		        {upsert: true, overwrite: true, new: true,
		          fields: { createdAt: 0, updatedAt: 0 }},
		        function(err, data) {
		            if (err) {
		                res.send(err);
		            } else {
		                res.send(data);
		            }
		        });
		});
		app.get("/api/getPositions/:organizationId", function (req, res) {
		    Config.findOne({
		        organizationId: req.params.organizationId
		    }, {createdAt: 0, updatedAt: 0}, function (err, data) {
		        if (err) {
		            res.send(err);
		        }
		        else {
		            res.send(data);
		        }
		    });
		});
		router.get('/get', sd.ensure, function(req, res){
			let _ids = [];
			for (var i = 0; i < req.user.organizations.length; i++) {
				_ids.push(req.user.organizations[i]._id);
			}
			Config.find({
				organizationId: {
					$in: _ids
				}
			}, {createdAt: 0, updatedAt: 0}).exec(function(err, docs){
				res.json(docs);
			});
		});
		router.post('/create', sd.ensure, function(req, res){
			req.body.user = req.user._id;
			req.body.org = req.user.organizations[0]._id;
			Config.create(req.body, function(err, doc){
				res.json(doc);
			});
		});
	/*
	*	End of
	*/
}