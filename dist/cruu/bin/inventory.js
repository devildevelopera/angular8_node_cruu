module.exports = function(sd, app){
	/*
	*	Model
	*/
		var InventorySchema = new sd.Schema({
		    name: { type: String }
		}, { timestamps: true });
		var Inventory = sd.mongo.model('Inventory', InventorySchema, 'Inventory');
		sd.Inventory = Inventory;
	/*
	*	Routes
	*/
		app.get("/api/getInventory", function(req, res) {
		    Inventory.find({}, function(err, data) {
		        if (err) {
		            res.send(err);
		        } else {
		            res.send(data);
		        }
		    });
		});
	/*
	*	End of
	*/
}