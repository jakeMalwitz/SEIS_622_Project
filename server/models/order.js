var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Create schema
var orderSchema = new Schema({
      paymentInfo: {
        cardHolderName: {type: String, required: false},
        cardNumber: {type: String, required: false},
        expDate: {type: String, required: false},
        securityCode: {type: String, required: false}
      },
      addressInfo: {
        firstName: {type: String, required: false},
        lastName: {type: String, required: false},
        address: {type: String, required: false},
        city: {type: String, required: false},
        state: {type: String, required: false},
        zip: {type: String, required: false},
        phone: {type: String, required: false}
      },
      cart: [{
        name: {type: String, required: false},
        type: {type: String, required: false},
        price: {type: Number, required: false}
      }],
      total: {type: Number, required: false}
});

//Export model
var Order = mongoose.model('Order', orderSchema);
module.exports = Order;
