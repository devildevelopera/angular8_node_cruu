module.exports = function(sd, app){
	/*
	*	Model
	*/
		var CategorySchema = new sd.Schema({
			org: { type: ObjectId, ref: 'Organizations'},
			order: { type: Number },
			name: { type: String }
		}, { timestamps: true });
		var Category = sd.mongo.model('Category', CategorySchema, 'Category');
		sd.Category = Category;
		var router = sd.router('/api/category');
	/*
	*	Routes
	*/
		router.get("/get", sd.ensure, function (req, res) {
			let _ids = sd.to_id(req.user.organizations);
			Category.find({
				org: {
					$in: _ids
				}
			}, function(err, categories){
				res.json(categories);
			});
		});
		router.post("/create", sd.ensure, function (req, res) {
			let _ids = sd.to_id(req.user.organizations);
			if(_ids.indexOf(req.body.org)>=0){
				Category.create(req.body, function(err, created){
					res.json(created);
				});
			}else{
				res.json(false);
			}
		});
		router.post("/update", sd.ensure, function (req, res) {
			let _ids = sd.to_id(req.user.organizations);
			if(_ids.indexOf(req.body.org)>=0){
				Category.findOne({
					_id: req.body._id
				}, function(err, doc){
					if(err || !doc) return res.json(false);
					doc.name = req.body.name;
					doc.order = req.body.order;
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
				Category.remove({
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