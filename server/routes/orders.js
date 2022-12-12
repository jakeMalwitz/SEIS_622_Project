var express = require('express');
var router = express.Router();
var Order = require('../models/order');

//Create Order
router.post('/', function (req, res) {

  var orders = Order(req.body);

  orders.save(function (err) {
    if(err) {
      console.log("Failed to Save..");
      res.sendStatus(500);
      return;
    }
    res.sendStatus(201);
  });
});

module.exports = router;
