var express = require('express');
var router = express.Router();
var MenuItem = require('../models/menuItem');
const fs = require('fs');

fs.readFile('server/routes/data.json', (err, data) => {
    if (err) throw err;
    let items = JSON.parse(data);
    for(var i = 0; i < items.length; i++){
       //populateMenuItems(items[i]);
    }
});

function populateMenuItems(item) {
  var menuItem = new MenuItem();

  menuItem.name = item.name;
  menuItem.type = item.type;
  menuItem.description = item.description;
  menuItem.price = item.price;

  menuItem.save(function (err) {
    if(err) {
      console.log("Failed to Populate Data");
      console.log(err);
      return;
    }
  });
}

//Get Menu Items
router.get('/', function (req, res) {
  MenuItem.find({}, function(err, menuItems) {
    if(err) {
      console.log(err);
      res.sendStatus(500);
      return;
    }
    res.send(menuItems);
  })
})

module.exports = router;
