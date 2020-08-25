/*
*   Initialize App
*/
	var express = require('express');
	var path = require("path");
	var bodyParser = require('body-parser');
	var mongo = require("mongoose");
	mongo.set('useCreateIndex', true);
	var mailerSDK = require('sib-api-v3-sdk');
	ObjectId = require('mongodb').ObjectID;
	require('dotenv').config();
	var mongoConnection = process.env.MONGO_URI;
	var sd = {
		mongo: mongo,
		ensure: function(req, res, next){
			if(req.user) next();
			else res.json(false);
		},
		ensure_admin: function(req, res, next){
			if(req.user && req.user.isAdmin) next();
			else res.json(false);
		},
		ensure_get: function(req, res, next){
			if(req.user) next();
			else res.redirect('/');
		},
		router: function(api){
			var router = express.Router();
			app.use(api, router);
			return router;
		},
		to_id: function(docs){
			let _ids = [];
			for (var i = 0; i < docs.length; i++) {
				_ids.push(docs[i].id);
			}
			return _ids;
		},
		to_date: function(date){
			date = new Date(date);
			return (date.getMonth()<9&&'0'||'')+(date.getMonth()+1)+'/'+(date.getDate()<10&&'0'||'')+date.getDate()+'/'+date.getFullYear();
		},
		sender: function(user){
			let orgId = user.organizations[0]._id;
			if(user && this._org_email[orgId]){
				return {
					email: this._org[orgId].email,
					name: this._org[orgId].name
				}
			}else return false;
		},
		event_dates: function(event){
			if(typeof event.startDate == 'string'){
				event.startDate = this.to_date(event.startDate);
			}
			if(typeof event.endDate == 'string'){
				event.endDate = this.to_date(event.endDate);
			}
			let date = event.startDate;
			if(event.startDate != event.endDate){
				date += ' - ' + event.endDate;
			}
			return date;
		}
	};
	var db = mongo.connect(mongoConnection, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false
	}, function (err, response) {
		if (err) { console.log(err); }
		else {
			const { createModel } = require('mongoose-gridfs');
			const Attachment_Event = createModel({
				modelName: 'Event_Files',
				connection: response
			});
			sd.Attachment_Event = Attachment_Event;
		}
	});
	var app = express();
	var session = require('express-session');
	app.use(session({
		key: 'express.sid.cruu',
		secret: 'thisIsCoolSecretFromCruu',
		resave: false,
		saveUninitialized: true,
		cookie: {
			maxAge: 24 * 60 * 60 * 1000
		},
		rolling: true,
		store: new(require("connect-mongo")(session))({
			url: mongoConnection
		})
	}));
	app.use(bodyParser.json({
		limit: '50mb'
	}));
	app.use(bodyParser.urlencoded({
		extended: true,
		limit: '50mb'
	}));
	/*
	app.use(function (req, res, next) {
		res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
		res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
		res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
		res.setHeader('Access-Control-Allow-Credentials', true);
		next();
	});
	*/
	var mailerClient = null;
	var mailerApiKey = null;
	var mailerApiInstance = null;
	if(process.env.SENDINBLUE_API_KEY) {
		mailerClient = mailerSDK.ApiClient.instance;
		mailerApiKey = mailerClient.authentications['api-key'];
		mailerApiKey.apiKey = process.env.SENDINBLUE_API_KEY;
		mailerApiInstance = new mailerSDK.SMTPApi();
	}
	sd.Schema = mongo.Schema;
	sd.mailerSDK = mailerSDK;
	sd.mailerApiInstance = mailerApiInstance;
	sd.mongo = mongo;
	sd.db = db;
	app.use(require('express-fileupload')({
		limits: {
			fileSize: 50 * 1024 * 1024
		}
	}));
/*
*   Models
*/
	require('./bin/user')(sd, app);
	require('./bin/file')(sd, app);
	require('./bin/restapi')(sd, app);
	require('./bin/job')(sd, app);
	require('./bin/group')(sd, app);
	require('./bin/rate')(sd, app);
	require('./bin/category')(sd, app);
	require('./bin/position')(sd, app);
	require('./bin/event')(sd, app);
	require('./bin/inventory')(sd, app);
	require('./bin/label')(sd, app);
	require('./bin/location')(sd, app);
	require('./bin/organization')(sd, app);
/*
*   Execute
*/
	app.use(express.static(__dirname)); // why ?
	var port = process.env.PORT || 8080;
	const server = require('http').Server(app);
	const io = require('socket.io')(server, { origins: '*:*'});
	server.listen(port, function () {
		console.log('App listening on port: ' + port)
	});
/*
*	Sockets
*/
	sd.socket = {
		io: io,
		emit: function(to, message, room=false){
			if(room){
				io.in(room).emit(to, message);
			}else{
				io.emit(to, message);
			}
		},
		add: function(connection){
			if(typeof connection == 'function') connections.push(connection);
		}
	}
	let connections = [function(socket){
		socket.on('create', function(content){
			socket.broadcast.emit('create', content);
		});
		socket.on('update', function(content){
			socket.broadcast.emit('update', content);
		});
		socket.on('unique', function(content){
			socket.broadcast.emit('unique', content);
		});
		socket.on('delete', function(content){
			socket.broadcast.emit('delete', content);
		});
	}];
	io.on('connection', function (socket) {
		for (var i = 0; i < connections.length; i++) {
			if(typeof connections[i] == 'function'){
				connections[i](socket);
			}
		}
	});
/*
*   End of
*/