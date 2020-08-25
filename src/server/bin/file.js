module.exports = function(sd, app){
	/*
	*	Model
	*/
		var FileSchema = new sd.Schema({
			data: String,
			name: String
		}, { timestamps: true });
		var File = sd.mongo.model('File', FileSchema, 'File');
		sd.File = File;
		var router = sd.router('/api/file');
	/*
	*	Routes
	*/
		router.post("/create", sd.ensure, function (req, res) {
			File.create(req.body, function(err, created){
				res.json('/api/file/get/'+created._id+'/'+(created.name||'noname.png'));
			});
		});
		router.post("/delete", sd.ensure, function (req, res) {
			File.remove(req.body._id, function(err){
				res.json(true);
			});
		});
		router.get("/get/:_id/:filename", sd.ensure, function (req, res) {
			File.findOne({
				_id: req.params._id
			}, function(err, file){
				if(err || !file) return res.redirect('/');
				//res.write(file.data, 'binary');
				res.send(file.data);
			});
		});
	/*
	*	End of
	*/
}