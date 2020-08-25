var fs = require('fs');
module.exports = function(sd, app){
	/*
	*	Model
	*/
		var EventsSchema = new sd.Schema({
			title: { type: String },
			description: { type: String },
			labels: { type: String },
			date: { type: String },
			startDate: { type: String },
			endDate: { type: String },
			time: { type: String },
			times: {},
			location: { type: ObjectId, ref: 'Locations' },
			crew: { type: Object },
			inventory: { type: Object },
			createdBy: { type: ObjectId, ref: 'Users' },
			moderators: [{ type: ObjectId, ref: 'Users' }],
			organizationId: { type: ObjectId, ref: 'Organizations' },
			auditChanges: { type: Array},
			hasAvailability: {type: Boolean},
			files: [{ type: String }],
			crewComments: {},
			budget: {},
			marked: {}
		}, { timestamps: true });
		var Event = sd.mongo.model('Events', EventsSchema, 'Events');
		sd.Event = Event;
		var router = sd.router('/api/event');
		// Event.find({}, function(err, docs){
		// 	for (var i = 0; i < docs.length; i++) {
		// 		console.log(docs[i].crew);
		// 	}
		// });
	/*
	*	Routes
	*/
		router.get("/get", sd.ensure, function (req, res) {
			if(req.user.isAdmin){
				let _ids = sd.to_id(req.user.organizations);
				Event.find({
					organizationId: {
						$in: _ids
					}
				}).populate('location').exec(function(err, events){
					res.json(events);
				});
			}else{
				sd.Job.find({
					assigned: req.user._id
				}).select('event').lean().exec(function(err, jobs){
					for (var i = 0; i < jobs.length; i++) {
						jobs[i] = jobs[i].event;
					}
					Event.find({
						_id: {
							$in: jobs
						}
					}).populate('location').exec(function(err, events){
						res.json(events);
					});
				});
			}
		});
		router.get("/_id", sd.ensure, function (req, res) {
			res.json(sd.mongo.Types.ObjectId());
		});
		router.post("/create", sd.ensure, function (req, res) {
			req.body.createdBy = req.user._id;
			if(typeof req.body.location == 'object' && req.body.location._id){
				req.body.location = req.body.location._id;
			}
			delete req.body._id;
			Event.create(req.body, function(err, created){
				Event.findOne({
					_id: created._id
				}).populate('location').exec(function(err, doc){
					res.json(doc);
				});
			});
		});
	    router.post("/update", sd.ensure, function (req, res) {
	    	let _ids = sd.to_id(req.user.organizations);
			if(_ids.indexOf(req.body.org)>=0){
		        Event.findOne({
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
	    router.post("/fetch", sd.ensure, function (req, res) {
	    	let _ids = sd.to_id(req.user.organizations);
			if(_ids.indexOf(req.body.org)>=0){
		        Event.findOne({
		            _id: req.body._id
		        }, function(err, doc){
		            res.json(doc);
		        });
			}else{
				res.json(false);
			}
	    });
	    router.post("/delete", sd.ensure, function (req, res) {
	    	let _ids = sd.to_id(req.user.organizations);
			if(_ids.indexOf(req.body.org)>=0){
				// sd.Job.remove({
				// 	event: req.body._id
				// });
		        Event.remove({
		            _id: req.body._id
		        }, function(err){
		            res.json(true);
		        });
			}else{
				res.json(false);
			}
	    });
	/*
	*	Old Routes
	*/
		app.post("/api/createEvent", function (req, res) {
		    var mod = new Event(req.body);
		    mod.save(function (err, data) {
		        if (err) {
		            res.send(err);
		        } else {
		            res.send({ data: "Creation success" });
		        }
		    });
		});
		app.post("/api/updateEvent", function (req, res) {
		    const availablePosition = req.body.availablePosition;
		    const removedUser = req.body.removedUser;
		    const newApplicant = req.body.newApplicant;
		    const event = req.body;
		    const createdBy = event.createdBy;

		    Event.findByIdAndUpdate(event._id, event, {new: true}).populate({
		    	path: 'createdBy',
		    	select: '-password -isAdmin -events -organizations'
		    }).populate('location').exec().then(function(updatedEvent) {
		    	res.send({message: 'Updated event successfully', data: updatedEvent});
	            // Once the event has been updated send the email out other available people
	            // TODO: pull code out into it's own code
	            if (availablePosition) {
	            	if (availablePosition.isNew && removedUser) {
	            		const skipUsers = [];

	            		skipUsers.push(ObjectId(removedUser._id));
	            		skipUsers.push(ObjectId(createdBy._id));

	            		model.find({
	            			_id: {
	            				$nin: skipUsers
	            			},
	            			organizations: {
	            				$elemMatch: {
	            					_id: ObjectId(availablePosition.organizationId),
	            					positions: {
	            						$elemMatch : {
	            							$eq: availablePosition.position
	            						}
	            					}
	            				}
	            			}
	            		}, {password: 0, forgotPassword: 0},
	            		function(err, data) {
	            			if (err) {
	            				console.log(err);
	            			} else if (sd.mailerApiInstance){

	            				data.forEach(user => {
	            					var sendSmtpEmail = new sd.mailerSDK.SendSmtpEmail();
	            					sendSmtpEmail = {
	            						to: [{
	            							email: user.email,
	            							name: user.firstName + ' ' + user.lastName
	            						}],
	            						templateId: 7,
	            						params: {
	            							EventName: event.title,
	            							calltime: availablePosition.callTime,
	            							position: availablePosition.position,
	            							LocationName: event.location.venueName,
	            							AddressLine1: event.location.address,
	            							AddressLine2: event.location.address2,
	            							CityStateZip: event.location.city + ', ' +
	            							event.location.state + ' ' + event.location.zipCode
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
	            				})
	            			}
	            		});
	            	} else if(!availablePosition.isNew && newApplicant) {
	            		if (sd.mailerApiInstance) {
	            			const eventCreator = updatedEvent.createdBy;

	                        // {{ params.approvalLink }}
	                        // {{ params.denyLink }}

	                        var sendSmtpEmail = new sd.mailerSDK.SendSmtpEmail();
	                        sendSmtpEmail = {
	                        	to: [{
	                        		email: eventCreator.email,
	                        		name: eventCreator.firstName + ' ' + eventCreator.lastName
	                        	}],
	                        	templateId: 8,
	                        	params: {
	                        		EventName: updatedEvent.title,
	                        		calltime: availablePosition.callTime,
	                        		position: availablePosition.position,
	                        		give_name: availablePosition.firstName  + ' ' + availablePosition.lastName,
	                        		take_name: newApplicant.firstName  + ' ' + newApplicant.lastName,
	                        		LocationName: updatedEvent.location.venueName,
	                        		AddressLine1: updatedEvent.location.address,
	                        		AddressLine2: updatedEvent.location.address2,
	                        		CityStateZip: updatedEvent.location.city + ', ' +
	                        		updatedEvent.location.state + ' ' + updatedEvent.location.zipCode
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
	            }
	        });
		});
		app.get("/api/getEventById/:eventId", function (req, res) {
		    Event.findById(req.params.eventId)
		        .populate({
		            path: 'availablePositions.newApplicants',
		            select: '-password -isAdmin -events -organizations'
		         })
		        .populate({
		            path: 'availablePositions.oldCrewId',
		            select: '-password -isAdmin -events -organizations'
		         })
		        .populate('location').exec()
		        .then(function (event) {
		            // handle success
		            return res.json(event);
		        }).catch(function (err) {
		            // handle error
		            return res.send(err);
		        });
		});
		app.post("/api/getOpenJobs/:organizationId", function (req, res) {
		    const organizationId = req.params.organizationId;

		    Event.find({ organizationId: organizationId, hasAvailability: true})
		    .populate('location').exec().then(function(openJobs) {
		        res.send(openJobs);
		    }).catch(function(error) {
		        //Handle Error
		    });
		});
		app.post("/api/applyToAvailableJob", function (req, res) {
		    const availableJob = req.body.availableJob;
		    const newApplicantId = req.body.newApplicantId;


		    const positionKey = "crew.".concat(availableJob.date).concat(".position");
		    const callTimeKey = "crew.".concat(availableJob.date).concat(".callTime");
		    const crewIdKey = "crew.".concat(availableJob.date).concat("._id");

		    var findOptions = { _id: availableJob.eventId };

		    findOptions[crewIdKey] = availableJob._id;
		    findOptions[positionKey] = availableJob.position;
		    findOptions[callTimeKey] = availableJob.callTime;


		    const newApplicantsKey = "crew.".concat(availableJob.date).concat(".newApplicants");
		    var setOptions = {}
		    setOptions[newApplicantsKey] = newApplicantId;


		    Event.findOneAndUpdate(findOptions,
		        { $addToSet: setOptions },
		        {new: true})
		        .populate({
		            path: 'createdBy',
		            select: '-password -isAdmin -events -organizations'
		         })
		        .populate('location').exec().then(function(updatedEvent) {

		                res.send(updatedEvent);

		                if (sd.mailerApiInstance) {

		                    const updatedAvailableJob = updatedEvent.availablePositions.find(function(element) {
		                        return element._id == availableJob._id;
		                    });

		                    const newApplicant = updatedAvailableJob.newApplicants.find(function(element) {
		                        return element._id == newApplicantId;
		                    })

		                    const oldCrew = updatedAvailableJob.oldCrewId;

		                    const eventCreator = updatedEvent.createdBy;

		                    var sendSmtpEmail = new sd.mailerSDK.SendSmtpEmail();
		                    sendSmtpEmail = {
		                        to: [{
		                            email: eventCreator.email,
		                            name: eventCreator.firstName + ' ' + eventCreator.lastName
		                        }],
		                        templateId: 8,
		                        params: {
		                           EventName: updatedEvent.title,
		                           calltime: availableJob.callTime,
		                           position: availableJob.position,
		                           give_name: oldCrew.firstName  + ' ' + oldCrew.lastName,
		                           take_name: newApplicant.firstName  + ' ' + newApplicant.lastName,
		                           LocationName: updatedEvent.location.venueName,
		                           AddressLine1: updatedEvent.location.address,
		                           AddressLine2: updatedEvent.location.address2,
		                           CityStateZip: updatedEvent.location.city + ', ' +
		                               updatedEvent.location.state + ' ' + updatedEvent.location.zipCode
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
		        ).catch(function(error) {
		            //Handle Error
		            console.log(error);
		        });
		});
		app.post("/api/saveEvent", function (req, res) {
		    var mod = new Event(req.body);
		    mod.save(function (err, data) {
		        if (err) {
		            res.send(err);
		        } else {
		            mod.populate('location', function(error, populatedEvent) {
		                if (err) {
		                    res.send(err);
		                } else {
		                    res.send({ message: "Saved Event", data: populatedEvent});
		                }
		            })
		        }
		    })
		});
 
		/*
		// read larger file
		const readStream = Attachment.read({ _id });
		 
		// read smaller file
		Attachment.read({ _id }, (error, buffer) => { ... });
		 
		// remove file and its content
		Attachment.unlink({ _id }, (error) => { ... });
		*/
		const fs = require('fs');
		app.post("/api/upload", function (req, res) {
			if(req.files){
				let _id = sd.mongo.Types.ObjectId();
				let file = _id+'_'+req.files.file.name;
				fs.writeFileSync(__dirname+'/files/'+file, req.files.file.data);
				const readStream = fs.createReadStream(__dirname+'/files/'+file);
				sd.Attachment_Event.write({
					filename: file,
					contentType: req.files.file.mimetype
				}, readStream, (error, doc) => {
					res.json("/api/file/event/"+file+"/"+req.files.file.name);
				});
			}else{
				res.json(false);
			}
		});
		app.get("/api/file/event/:filename/:export_name", function (req, res) {
			sd.Attachment_Event.read({ filename: req.params.filename }, (error, buffer) => {
				res.write(buffer, 'binary');
			});
		});
	/*
	*	Recursive
	*/
		var _categories = {};
		var _labels = {};
		setTimeout(()=>{
			sd.Category.find({}, function(err, categories){
				for (var i = 0; i < categories.length; i++) {
					_categories[categories[i].id] = categories[i];
					_categories[categories[i].name] = categories[i];
				}
			});
			sd.Label.find({}, function(err, labels){
				for (var i = 0; i < labels.length; i++) {
					_labels[labels[i].id] = labels[i];
					_labels[labels[i].name] = labels[i];
					_labels[labels[i].category] = labels[i];
				}
			});
		}, 1000);

		router.post("/48h", sd.ensure, function (req, res) {
            res.send(true);
			sd.Job.find({
				event: req.body._id
			}, function(err, jobs){
				for (var i = 0; i < jobs.length; i++) {
					if(jobs[i].assigned) send_48h_mail(req.body, jobs[i], req.get('host'));
				}
			})
        });
        
		var cron = require("node-cron");
		const send_48h_mail = function(event, job, host){
			sd.User.findOne({
				_id: job.assigned
			}, function(err, user){
				let showType = '';
				let POCName = '';
				let ShopSteward = '';
				let MealPenalty = '';
				let TechBook = '';
				let TechManager = '';
				let labels = event.labels && event.labels.split(', ') || [];
				for (var i = 0; i < labels.length; i++) {
					let label = _labels[labels[i]];
					if(label.category == 'Show Type' && showType){
						showType+=', '+label.name;
					}else if(label.category == 'showType' && !showType){
						showType=label.name;
					}
					if(label.category == 'POC Name' && POCName){
						POCName+=', '+label.name;
					}else if(label.category == 'POC Name' && !POCName){
						POCName=label.name;
					}
					if(label.category == 'Shop Steward' && ShopSteward){
						ShopSteward+=', '+label.name;
					}else if(label.category == 'Shop Steward' && !ShopSteward){
						ShopSteward=label.name;
					}
					if(label.category == 'Meal Penalty' && MealPenalty){
						MealPenalty+=', '+label.name;
					}else if(label.category == 'Meal Penalty' && !MealPenalty){
						MealPenalty=label.name;
					}
					if(label.category == 'Tech Book' && TechBook){
						TechBook+=', '+label.name;
					}else if(label.category == 'Tech Book' && !TechBook){
						TechBook=label.name;
					}
					if(label.category == 'Tech Manager ' && TechManager){
						TechManager+=', '+label.name;
					}else if(label.category == 'Tech Manager ' && !TechManager){
						TechManager=label.name;
					}
				}
				if (sd.mailerApiInstance){
                   
                    var formattedDate = sd.to_date( event.startDate )

                    if (! event.times[formattedDate] ){
                        formattedDate = event.startDate.split("-")
                        formattedDate = formattedDate[1] +"/" +formattedDate[2] +"/"+formattedDate[0]
                    }

                    var sendSmtpEmail = new sd.mailerSDK.SendSmtpEmail();
					sendSmtpEmail = {
						to: [{
							email: user.email,
							name: user.firstName + ' ' + user.lastName
						}],
						templateId: 20,
						params: {
							EventDates: sd.event_dates(event),
							LocationName: event.location.venueName,
							calltime: event.times[formattedDate].time,
							position: job.position,
							showType: showType||"N/A",
							POCName: POCName||"N/A",
							ShopSteward: ShopSteward||"N/A",
							MealPenaltyStatus: MealPenalty||"N/A",
							TechBookStatus: TechBook||"N/A",
							TechManager: TechManager||"N/A"
						}
					};
					sendSmtpEmail.params.ConfirmLink = (host||'cruu-test.azurewebsites.net')+'/confirm/'+job._id+'/'+job.assigned;
					let sender = sd.sender(user);
					if(sender){
						sendSmtpEmail.sender = sender;
					}
					sd.mailerApiInstance.sendTransacEmail(sendSmtpEmail).then(function(data) {
						console.log("Email Sent", data);
					}, function(error) {
						console.error(error);
						res.send(error);
					});
				} else {
					console.log('Error mailing service not enabled');
				}
			});
		}
		const get_jobs_for_48h_mail = function(date, event){
			if(!event.marked) event.marked={};
			sd.Job.find({
				event: event._id
			}, function(err, docs){
				let _users = {};
				for (var i = 0; i < docs.length; i++) {
					if(docs[i].assigned){
						if(event.marked[date+docs[i].assigned]) continue;
						if (sd.mailerApiInstance){
							event.marked[date+docs[i].assigned] = true;
							event.markModified('marked');
							event.save(()=>{});
						}
						send_48h_mail(event, docs[i]);
					}
				}
			});
		}
		cron.schedule('* * * * *', () => {
			let startDate = new Date(new Date().getTime()+172800000);
			startDate = startDate.getFullYear()+'-'+(startDate.getMonth()<9&&'0'||'')+(startDate.getMonth()+1)+'-'+(startDate.getDate()<10&&'0'||'')+startDate.getDate();
			Event.find({
				startDate: startDate
			}).populate('location').exec(function(err, docs){
				if(docs&&docs.length){
					for (var i = 0; i < docs.length; i++) {
						get_jobs_for_48h_mail(startDate, docs[i]);
					}
				}
			});
		});
		/*
		//Send email reminder at 3am everyday for events happening within 24 hours
		cron.schedule("0 3 * * *", function() {
		    var today = new Date();
		    var aDayAhead = new Date();
		    aDayAhead.setDate(aDayAhead.getDate() + 1);
		    Event.find({}, function(err, data) {
		        if (err) {
		            // TODO: Handle the error
		        } else {
		            data.forEach((event) => {
		              if(event._id === '5e0e55e6a46e573c4c212964'){
		                  console.log("Skipping test event");
		              } else {
		                  Object.keys(event.crew).forEach((crewDate) => {
		                    event.crew[crewDate].forEach((crew) => {

		                        event.date = crewDate;
		                        var eventDate = new Date(crewDate);
		                        eventDate.setHours(0,0,0,0);

		                        if(crew.callTime) {
		                            var timePieces = crew.callTime.split(':');
		                            var hours = parseInt(timePieces[0]);
		                            if(timePieces[1].includes("PM")) {
		                                hours += 12;
		                            } else if(hours == 12) {
		                                hours = 0;
		                            }
		                            var minutes = parseInt(timePieces[1].substring(0,2));

		                            eventDate.setHours(hours,minutes,0,0);
		                        }

		                        var eventDateTime = eventDate.getTime();
		                        if (eventDateTime >= today.getTime() &&
		                            eventDateTime <= aDayAhead.getTime()) {

		                            if (sd.mailerApiInstance){

		                                var sendSmtpEmail = new sd.mailerSDK.SendSmtpEmail();

		                                sendSmtpEmail = {
		                                    to: [{
		                                        email: crew.email,
		                                        name: crew.firstName + ' ' + crew.lastName
		                                    }],
		                                    templateId: 6,
		                                    params: {
		                                          EventName: event.title,
		                                          calltime: crewDate + ' ' + crew.callTime,
		                                          position: crew.position,
		                                          LocationName: event.venueName,
		                                          AddressLine1: event.address,
		                                          AddressLine2: event.address2,
		                                          CityStateZip: event.city + ', ' + event.state + ' ' + event.zipCode,
		                                          LinkText: 'cruu-test.azurewebsites.net/event-details?eventId=' + event._id
		                                      }
		                                };
										let sender = sd.sender(req.user);
										if(sender){
											sendSmtpEmail.sender = sender;
										}
		                                sd.mailerApiInstance.sendTransacEmail(sendSmtpEmail).then(function(data) {
		                                  console.log("Email Sent", data);
		                                }, function(error) {
		                                  console.error(error);
		                                  res.send(error);
		                                });
		                            } else {
		                                console.log('Error mailing service not enabled');
		                            }
		                        }
		                    });
		                  });
		              }
		            });

		        }
		    })
		});
		*/
	/*
	*	End of
	*/
}