module.exports = function(sd, app){
	/*
	*	Model
	*/
		var ApiSchema = new sd.Schema({
			url: String,
			model: String,
			description: String,
			tofix: String,
			role: {},
			active: Boolean
		}, { timestamps: true });
		var RestApi = sd.mongo.model('RestApi', ApiSchema, 'RestApi');
		sd.RestApi = RestApi;
		var router = sd.router('/api/restapi');
	/*
	*	Routes
	*/
		router.get("/get", sd.ensure_admin, function (req, res) {
			RestApi.find({}, function(err, apis){
				res.json(apis);
			});
		});
		router.post("/create", sd.ensure_admin, function (req, res) {
			delete req.body._id;
			RestApi.create(req.body, function(err, created){
				res.json(created);
			});
		});
		router.post("/update", sd.ensure_admin, function (req, res) {
			RestApi.findOne({
				_id: req.body._id
			}, function(err, doc){
				if(err || !doc) return res.json(false);
				doc.url = req.body.url;
				doc.description = req.body.description;
				doc.tofix = req.body.tofix;
				doc.role = req.body.role;
				doc.markModified('role');
				doc.active = req.body.active;
				doc.save(function(){
					res.json(true);
				});
			});
		});
		router.post("/delete", sd.ensure_admin, function (req, res) {
			RestApi.remove({
				_id: req.body._id
			}, function(err){
				res.json(true);
			});
		});
	/*
	*	End of
	*/
}