var bcrypt = require("bcrypt-nodejs");
var passport = require('passport');
// const { connectableObservableDescriptor } = require("rxjs/internal/observable/ConnectableObservable");
module.exports = function(sd, app){
	/*
	*	Initialize
	*/
		app.use(passport.initialize());
		app.use(passport.session());
		passport.serializeUser(function(user, done) {
			done(null, user.id);
		});
		passport.deserializeUser(function(id, done) {
			User.findById(id, function(err, user) {
				done(err, user);
			});
		});
		var router = sd.router('/api/user');
	/*
	*	Model
	*/
		var UsersSchema = new sd.Schema({
			email: String,
			address: String,
			address2: String,
			city: String,
			state: String,
			zip: Number,
			emergencyContactName: String,
			emergencyContact: String,
			password: { type: String },
			firstName: { type: String },
			lastName: { type: String },
			isAdmin: { type: Boolean },
			phoneNumber: { type: String },
			columnHeaderConfiguration: [],
			organizations: [{
				_id: { type: ObjectId, ref: 'Organizations' },
				positions: [{}],
				_positions: [String]
			}],
			events: [{
				type: ObjectId,
				ref: 'Events'
			}],
			forgotPassword: {
				_id: { type: ObjectId },
				ttl: {type: Date }
			},
			newMember: {
				_id: { type: ObjectId },
				ttl: {type: Date }
			}
		}, { versionKey: false, timestamps: true });

		UsersSchema.methods.generateHash = ((password) => {
			return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
		});

		UsersSchema.methods.validPassword = ((password, userPassword) => {
			return bcrypt.compareSync(password, userPassword);
		});

		var User = sd.mongo.model('Users', UsersSchema, 'Users');
		sd.User = User;
	/*
	*	New Routes
	*/
		router.get("/get", function (req, res) {
			if(!req.user) return res.json([]);
			const organizationId = ObjectId(req.params.organizationId);
			User.find({
				"organizations._id": req.user.organizations[0]._id
			}).lean().exec(function(err, users) {
				for (var i = 0; i < users.length; i++) {
					users[i]._activated = !!users[i].password;
					delete users[i].password;
				}
				res.json(users||[]);
			});
		});
		router.post("/update", function(req, res) {
			if(req.user.isAdmin && req.user._id != req.body._id){
				User.findOne({
					_id: req.body._id
				}, function(err, user){
					user.firstName = req.body.firstName;
					user.organizations = req.body.organizations;
					user.lastName = req.body.lastName;
					user.phoneNumber = req.body.phoneNumber;
					user.address = req.body.address;
					user.address2 = req.body.address2;
					user.emergencyContactName = req.body.emergencyContactName;
					user.emergencyContact = req.body.emergencyContact;
					user.save(()=>{
						res.json(true);
					});

				});
			}else{
				req.user.organizations = req.body.organizations;
				req.user.firstName = req.body.firstName;
				req.user.lastName = req.body.lastName;
				req.user.phoneNumber = req.body.phoneNumber;
				req.user.address = req.body.address;
				req.user.address2 = req.body.address2;
				req.user.emergencyContactName = req.body.emergencyContactName;
				req.user.emergencyContact = req.body.emergencyContact;
				req.user.save(()=>{
					res.json(true);
				});
			}
		});
	/*
	*	Routes
	*/
		app.get("/api/getCrewUsers/:organizationId", function(req, res) {
			const organizationId = ObjectId(req.params.organizationId);
			User.find({
				organizations: {
					$elemMatch: {
						_id: organizationId
					}
				},
				password: { $exists: true }
			}, {
				password: 0,
				isAdmin: 0,
				events: 0,
				// organizations: 0,
				forgotPassword: 0
			}, function(err, data) {
				if (err) {
					res.send(err);
				} else {
					res.send(data);
				}
			});
		});
		app.post("/api/deleteUser", function (req, res) {
			User.findOne({
				organizations: {
					$elemMatch: {
						_id: req.user.organizations[0]._id
					}
				},
				_id: req.body.id
			}, function (err, user) {
				if(err || !user){
					return res.json(false);
				}
				if(user.organizations.length>1){
					for (var i = 0; i < user.organizations.length; i++) {
						if(user.organizations[i]._id == req.user.organizations[0]._id){
							user.organizations.splice(i, 1);
							break;
						}
					}
					user.save(function(){
						res.json(true);
					});
				}else{
					User.deleteOne({ _id: req.body.id }, function (err) {
						if (err) {
							res.send(err);
						} else {
							res.send({ data: "Record has been Deleted..!!" });
						}
					});
				}
			});
		});
		app.get("/api/getUsers", function (req, res) {
			User.find({}).lean().exec(function (err, users) {
				for (var i = 0; i < users.length; i++) {
					users[i]._activated = !!users[i].password;
					delete users[i].password;
				}
				res.json(users||[]);
			});
		});
		app.get("/api/getUser/:userId", function (req, res) {
			User.findOne({
				_id: req.params.userId
			}, function (err, data) {
				if (err) {
					res.send(err);
				}
				else {
					res.send(data);
				}
			});
		});
		app.post("/api/updateUserEvents/:eventId", function (req, res) {
		    const eventId = req.params.eventId;
		    //convert the String to ObjectId
		    const userIds = [];
		    req.body.listOfUsers.forEach(id => {
		        userIds.push(ObjectId(id));
		    });
		    //remove the event from anyone who isn't part of the event anymore.
		    User.updateMany({
		    	_id: {$nin: userIds},
		    	events: {
		    		$elemMatch: {
		    			$eq: ObjectId(eventId)
		    		}
		    	}
		    }, {
		    	$pull: {
		    		events: eventId
		    	}
		    }, function(err, data) {
	            //Nothing needs to be done other than showing error
	            //TODO: Better handling of error
	            if (err) {
	            	console.log(err);
	            }
	        })
		    //add the eventId to everyone in the event
		    User.updateMany({
		    	_id: {
		    		$in: userIds
		    	}
		    }, {
		    	$addToSet: {
		    		events: eventId
		    	}
		    }, function(err, data) {
	            if (err) {
	                res.send(err);
	            } else {
	                res.send(data);
	            }
	        });
		    // TODO: Use the req.body.dates to save the dates to the users
		    // req.body.dates[userId] has list of dates
		});
		app.post("/api/updateUserPositions/:userId/:organizationId", function (req, res) {
			const positions = req.body;
			const _positions = req.body.slice();
			for (var i = 0; i < _positions.length; i++) {
				_positions[i] = _positions[i].value;
			}
			if(req.user._id == req.params.userId){
				for (var i = 0; i < req.user.organizations.length; i++) {
					if(req.user.organizations[i]._id==req.params.organizationId){
						req.user.organizations[i].positions = req.body;
						req.user.organizations[i]._positions = _positions;
						return req.user.save(()=>{
							res.json(true);
						});
					}
				}
			}else if(req.user.isAdmin){
				User.findOne({
					_id: req.params.userId
				}, function(err, user){
					if(err || !user) return res.json(false);
					for (var i = 0; i < user.organizations.length; i++) {
						if(user.organizations[i]._id==req.params.organizationId){
							user.organizations[i].positions = req.body;
							user.organizations[i]._positions = _positions;
							return user.save(()=>{
								res.json(true);
							});
						}
					}
				});
			}else{
				res.json(false);
			}
		});
		app.post("/api/getUsers", function (req, res) {
		    const userIds = [];
		    req.body.forEach(id => {
		        userIds.push(ObjectId(id));
		    });

		    User.find({ _id: { $in: userIds}}, {password: 0, isAdmin: 0, events: 0,
		            organizations: 0, forgotPassword: 0}, function(err, data) {
		        if (err) {
		            res.send(err);
		        } else {
		            res.send(data);
		        }
		    });
		});
		app.delete("/api/deleteEvent/:eventId", function (req, res) {
		    const eventId = req.params.eventId;
		    sd.Event.deleteOne({ _id: eventId }, function (err) {
		        if (err) {
		            res.send(err);
		        }
		        else {
		            res.send({ data: "Record has been Deleted..!!" });
		        }
		    });

		    //remove the event from everyone
		    User.updateMany({
		            events: { $elemMatch: { $eq: ObjectId(eventId) } }
		        },
		        { $pull: { events: eventId } },
		        function(err, data) {
		            //Nothing needs to be done other than showing error
		            //TODO: Better handling of error
		            if (err) {
		                console.log(err);
		            }
		        }
		    )
		});
		app.put("/api/forgotPassword", function (req, res) {
		    const email = req.body.username.toLowerCase();
		    const currentDate = new Date();
		    const forgotPasswordId = ObjectId();
		    //Add a day, this is how long the token will live
		    currentDate.setDate(currentDate.getDate() + 1);

		    User.findOneAndUpdate({
		            email: email
		        },
		        { $set: {
		            "forgotPassword._id": forgotPasswordId,
		            "forgotPassword.ttl" : currentDate.getTime()
		            }
		        },
		        { new: true,
		          fields: { password: 0, forgotPassword: 0 }
		        })
		        .exec().then(function(updatedMember) {

		            res.send({ data: "Please check your email to reset your password." });

		            if (sd.mailerApiInstance) {
		                //TODO: change link!
		                let resetLink = req.protocol;
		                resetLink += '://'
		                resetLink += req.hostname
		                if( process.env.DEVELOPMENT) {
		                    resetLink += ':4200'
		                }
		                resetLink += "/reset-password?token="
		                resetLink += forgotPasswordId;

		                var sendSmtpEmail = new sd.mailerSDK.SendSmtpEmail();
		                sendSmtpEmail = {
		                    to: [{
		                        email: updatedMember.email,
		                        name: updatedMember.firstName + ' ' + updatedMember.lastName
		                    }],
		                    templateId: 13,
		                    params: {
		                       resetLink: resetLink
		                   }
		                };
						let sender = sd.sender(req.user);
						if(sender){
							sendSmtpEmail.sender = sender;
						}
		                sd.mailerApiInstance.sendTransacEmail(sendSmtpEmail).then(function(data) {
		                  console.log(data);
		                }, function(error) {
		                  console.error(error);
		                });
		            }
		        }
		    )
		});
		app.put("/api/resetPassword", function (req, res) {
			const resetToken = ObjectId(req.body.resetToken);
			const newPassword = UsersSchema.methods.generateHash(req.body.password);
			User.findOneAndUpdate({
				"forgotPassword._id": resetToken
			},{
				$set: {
					"password": newPassword
				},
				$unset: {
					"forgotPassword": ""
				}
			}, { new: true,
				fields: { password: 0, forgotPassword: 0 }
			}).exec().then(function(updatedUser) {
				const responseData = {
					isError: false,
					message: "Success"
				}
				res.send(responseData);
			});
		});
		app.put("/api/updateDashboardConfiguration", function (req, res) {
			const email = req.body.username.toLowerCase();
			const columnHeaderConfiguration = req.body.columnHeaders;
		    User.findOneAndUpdate({
		            email: email
		        },
		        { $set: {
		            "columnHeaderConfiguration": columnHeaderConfiguration,
		            }
		        },
		        { new: true })
		        .exec().then(function(data) {
		            res.send({ message: "Successfully updated dashboard configuration.", data: data});
		        }
		    )
		});
		app.get('/api/validateToken/:token', function(req, res) {
		    const token = req.params.token;

		    const currentDate = new Date();
		    const errorMessage = "Hmm, the password reset link has expired. No worries,"
		        + " hit 'Send link' then check your email inbox for a new one.";

		    User.findOne({
		        "forgotPassword._id": ObjectId(token)
		    }, {password: 0},
		      function(err, data) {
		        const responseData = {
		            isError: false,
		            message: null
		        }

		        if (err) {
		            res.send(err);
		        } else if(data) {
		            if (currentDate.getTime() <= data.forgotPassword.ttl) {
		                responseData.isError = false;
		                responseData.message = 'Successful Validation';
		                res.send(responseData);
		            } else {
		                responseData.isError = true;
		                responseData.message = errorMessage;
		                res.send(responseData);
		            }
		        } else {
		            responseData.isError = true;
		            responseData.message = errorMessage;
		            res.send(responseData);
		        }
		    });
		});
		app.get('/api/validateNewMemberToken/:token', function(req, res) {
		    const token = req.params.token;
		    const currentDate = new Date();
		    const errorMessage = "The sign up link has expired. Contact the "
		    + "organization about retrieving another.";
		    const responseData = {
		        isError: false,
		        message: null,
		        data: null
		    };
		    User.findOne({
		        "newMember._id": ObjectId(token)
		    }, {password: 0})
		    .populate({path: 'organizations._id'}).exec().then(function(data) {
		        if(data) {
		            if (data.newMember && currentDate.getTime() <= data.newMember.ttl) {
		                responseData.isError = false;
		                responseData.message = 'Successful Validation';
		                responseData.data = data;
		                if(data.forgotPassword) {
		                    delete responseData.data.forgotPassword;
		                }
		                delete responseData.data.newMember;

		                res.send(responseData);
		            } else {
		                responseData.isError = true;
		                responseData.message = errorMessage;
		                res.send(responseData);
		            }
		        } else {
		            responseData.isError = true;
		            responseData.message = errorMessage;
		            res.send(responseData);
		        }
		    }).catch(function(error) {
		            //Handle Error
		            responseData.data = error;
		            res.send(responseData);
		    });
		});
		app.put('/api/sendNewMemberLink', function(req, res) {
		    const newMemberEmail = req.body.email;
		    const organizationId = req.body.organizationId;
		    User.findOne({
	          "email": newMemberEmail
	        }).exec().then(function(user) {
	            const responseData = {
	                isError: false,
	                message: "Successful sent sign up link!",
	                data: null
	            }
	            if (user) {
	                responseData.isError = true;
	                responseData.message = "User already exists."
	                res.send(responseData);
	            } else {
	                const currentDate = new Date();
	                const newMemberId = ObjectId();
	                //Add a week, this is how long the token will live
	                currentDate.setDate(currentDate.getDate() + 7);
	                const newUser = {
	                    email: newMemberEmail,
	                    organizations: {
	                        _id: organizationId
	                    },
	                    newMember: {
	                        _id: newMemberId,
	                        ttl: currentDate
	                    }
	                }
	                var mod = new User(newUser);
	                mod.save(function (err, savedUser) {
	                    responseData.user = mod;
	                    if (err) {
	                        responseData.isError = true;
	                        responseData.data = err;
	                        res.send(responseData);
	                    } else if (sd.mailerSDK && sd.mailerApiInstance) {
                            let newMemberLink = req.protocol + '://' + req.get('host') + "/sign-up?token=" + newMemberId;
                            console.log("link", newMemberLink);
                            var sendSmtpEmail = new sd.mailerSDK.SendSmtpEmail();
                            sendSmtpEmail = {
                                to: [{
                                    email: newMemberEmail
                                }],
                                templateId: 15,
                                params: {
                                	name: req.body.name,
                                	link: newMemberLink
                                }
                            };
							let sender = sd.sender(req.user);
							if(sender){
								sendSmtpEmail.sender = sender;
							}
                            sd.mailerApiInstance.sendTransacEmail(sendSmtpEmail).then(function(data) {
                              console.log(data);
                            }, function(error) {
                              console.error(error);
                            });
	                    }
	                    res.send(responseData);
	                })
	            }
	        })
		});
		app.get("/api/getEvents/:userId", function(req, res) {
			console.log('remove this route');
			User.findById(req.params.userId).populate({
				path: 'events',
				populate: {
					path: 'location'
				}
			}).exec(function(err, user){
				if (err || !user) {
					res.send(err);
				} else {
					res.send(user.events);
				}
			});
		});
		app.post('/api/sendEmail/:templateId', (req, res) => {
		    if (sd.mailerApiInstance){
		        var sendSmtpEmail = new sd.mailerSDK.SendSmtpEmail();
		        req.body.LinkText = req.hostname + req.body.LinkText;
		        sendSmtpEmail = {
		            to: [{
		                email: req.body.email,
		                name: req.body.fullName
		            }],
		            templateId: parseInt(req.params.templateId),
		            params: req.body
		        };
				let sender = sd.sender(req.user);
				if(sender){
					sendSmtpEmail.sender = sender;
				}
		        sd.mailerApiInstance.sendTransacEmail(sendSmtpEmail).then(function(data) {
		          res.send(data);
		        }, function(error) {
		          console.error(error);
		          res.send(error);
		        });
		    } else {
		        res.send('Error mailing service not enabled');
		    }
		});
	/*
	*	Initialize User and Mongoose
	*/
		router.get("/me", function(req, res) {
			if(req.user){
				User.findOne({
					_id: req.user._id
				}).select('-password -forgotPassword').exec(function(err, user){
					res.json(user);
				});
			}else{
				res.json({});
			}
		});
		router.post("/status", function(req, res) {
			User.findOne({
				$or: [{
					reg_email: req.body.email.toLowerCase()
				},{
					email: req.body.email.toLowerCase()
				}]
			}, function(err, user) {
				var json = {};
				json.email = !!user;
				if(user&&req.body.password){
					json.pass = user.validPassword(req.body.password);
				}
				res.json(json);
			});
		});
		router.post("/request", function(req, res) {
			User.findOne({
				email: req.body.email.toLowerCase()
			}, function(err, user) {
				user.data.resetPin = Math.floor(Math.random() * (999999 - 100000)) + 100000;
				console.log(user.data.resetPin);
				user.data.resetCreate = new Date().getTime();
				user.data.resetCounter = 3;
				user.markModified('data'); 
					user.save(function(err){
						if (err) throw err;
						res.json(true);
						sd.send({
							to: user.email,
							title: 'Code: '+user.data.resetPin,
							html: 'Code: '+user.data.resetPin
						}, function(){
							//res.json(true);
						});
					});
				});
		});
		router.post("/change", function(req, res) {
			User.findOne({
				email: req.body.email.toLowerCase()
			}, function(err, user) {
				var message;
				var now = new Date().getTime();
				if (user.data.resetCounter > 0 && (now - user.data.resetCreate) <= 600000) {
					if (user.data.resetPin == req.body.pin) {
						user.password = user.generateHash(req.body.password);
						message = 'Password successfully changed.';
						delete user.data.resetPin;
						delete user.data.resetCounter;
						delete user.data.resetCreate;
					} else {
						user.data.resetCounter--;
						message = 'Wrong code.';
					}
				} else {
					message = 'I am sorry reset code is not active now.'
					delete user.data.resetPin;
					delete user.data.resetCounter;
					delete user.data.resetCreate;

				}
				user.markModified('data'); 
				user.save(function(err) {
					if (err) throw err;
					res.json(message);
				});
			});
		});
		router.post("/changePassword", sd.ensure, function(req, res) {
			if (req.user.validPassword(req.body.oldPass)){
				req.user.password = req.user.generateHash(req.body.newPass);
				req.user.save(function(){
					res.json(true);
				});
			}else res.json(false);
		});
		router.get('/logout', function(req, res) {
			req.logout();
			res.redirect(sd._config.passport.local.successRedirect);
		});
		router.get('/logout-local', function(req, res) {
			req.logout();
			res.json(true);
		});
	/*
	*	Passport Management
	*/
		var LocalStrategy = require('passport-local').Strategy;
		router.post('/login-local', passport.authenticate('login-local'), function(req, res) {
			User.findOne({
				_id: req.user._id
			}).populate('events').select('-password').exec(function(err, user){
				res.json(user);
			});
		});
		passport.use('login-local', new LocalStrategy(function(username, password, done) {
			User.findOne({
				email: username.toLowerCase()
			}, function(err, user) {
				if (err) return done(err);
				if (!user) return done(null, false);
				if (!user.validPassword(password, user.password)) return done(null, false);
				return done(null, user);
			});
		}));
		router.post('/signup-local', passport.authenticate('signup'), function(req, res) {
			User.findOne({
				_id: req.user._id
			}).populate('events').select('-password').exec(function(err, user){
				res.json(user);
			});
		});
		passport.use('signup', new LocalStrategy({
			usernameField : 'email',
			passwordField : 'password',
			passReqToCallback : true
		}, function(req, email, password, done) {
			req.body.isAdmin = false;
			sd.Organization.findOne({
				name: req.body.organizationName
			}).exec().then(function(organization) {
				if(organization) {
					return organization;
				} else {
					var newOrganization = new sd.Organization({name: req.body.organizationName});
					return newOrganization.save();
				}
			}).then(function(origanization) {
				var organizationObject = {
					_id: origanization._id,
					positions: []
				};
				if(req.body.organizations) {
					req.body.organizations.push(organizationObject);
				} else {
					req.body.organizations = [];
					req.body.organizations.push(organizationObject);
				}
				//normalize the email
				req.body.email = req.body.email.toLowerCase();
				req.body.password = UsersSchema.methods.generateHash(req.body.password);
				var mod = new User(req.body);
				if (req.body.mode == "Save") {
					mod.save(function (err, data) {
						if (err) {
							//res.send(err);
						} else {
							//res.send({ message: "Record has been Inserted..!!", data: data });
						}
						done(null, mod);
					});
				} else {
					User.findOneAndUpdate({
						_id: ObjectId(req.body._id),
						organizations: { $elemMatch: { _id: ObjectId(origanization._id) } }
					}, {
						$set: {
							password: req.body.password,
							firstName: req.body.firstName,
							lastName: req.body.lastName,
							"organizations.$.positions" : req.body.positions
						},
						$unset: {
							newMember: {}
						}
					}, {new: true }).exec().then(function (data) {
						done(null, mod);
						//res.send({ message: "Record has been Updated..!!", data: data });
					});
				}
			}).then(undefined, function(err) {
				console.log(err);
			});
		}));
	//
	/*
	*	End of
	*/
}