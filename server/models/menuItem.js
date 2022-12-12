var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Create schema
var menuItemSchema = new Schema({
  name: {type: String, required: true},
  type: String,
  description: String,
  price: Number
});

//Export model
var MenuItem = mongoose.model('MenuItem', menuItemSchema);
module.exports = MenuItem;
