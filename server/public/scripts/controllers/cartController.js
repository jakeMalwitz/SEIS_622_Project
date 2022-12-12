myApp.controller("cartController", ["$scope", "$http", "cart", function($scope, $http, cart) {

  $scope.order = {};
  $scope.cart = cart.getCart();

  $scope.addressInfo = {};
  $scope.paymentInfo = {};
  $scope.tip = 0.00;

  var subtotal = 0.00;
  const taxRate = 6.875;
  var tax = 0.00;

  $scope.getSubtotal = function() {
    subtotal = cart.getSubtotal().toFixed(2)
    return subtotal;
  }

  $scope.getTax = function() {
    tax = (subtotal*((taxRate/100))).toFixed(2);
    return tax;
  }

  $scope.getTotal = function() {
    var tip = $scope.tip;
    total = Number(subtotal) + Number(tax) + Number(tip);
    return total.toFixed(2);
  }

  $scope.removeItemFromCart = function(item) {
    cart.removeItem(item);
    $scope.cart = cart.getCart();
  };

  $scope.removeEntireItemFromCart = function(item) {
    cart.removeEntireItem(item);
    $scope.cart = cart.getCart();
  };

  $scope.addAnotherItemToCart = function(item) {
    cart.addItem(item);
    $scope.cart = cart.getCart();
  };

  //Submit Order
  $scope.submitOrder = function() {
    if(validateCart() && validatePayment() && validateAddress()) {

      $scope.order.cart = $scope.cart;
      $scope.order.paymentInfo = $scope.paymentInfo;
      $scope.order.addressInfo = $scope.addressInfo;
      $scope.order.total = total;

      var data = $scope.order;

      $http.post('/orders', data).then(function(response) {
        if(response.status == 201) {
          location.reload();
          alert("Success! Your order has been placed.");
        } else {
          alert("We were unable to process your order.");
        }
      });
    }
  };

  $scope.setTip = function(tip) {
    $scope.tip = tip;
  }

  function validatePayment() {
    var msg= "";
    var fields = document.getElementById("paymentForm").getElementsByTagName("input");

    for (var i=0; i < fields.length; i++){
      if (fields[i].value == "")
        msg = 'Please fill out all payment fields. \n';
    }

    if(msg) {
      alert(msg);
      return false;
    }
    else
      return true;
  }

  function validateAddress() {
    var msg= "";
    var fields = document.getElementById("addressForm").getElementsByTagName("input");

    for (var i=0; i < fields.length; i++){
      if (fields[i].value == "")
        msg = 'Please fill out all address fields. \n';
    }

    if(msg) {
      alert(msg);
      return false;
    }
    else
      return true;
  }

  function validateCart() {
    if($scope.cart.length == 0) {
      alert("Cart is empty!");
      return false;
    } else {
      return true;
    }
  }

  //Need to implement
  function validateTip() {

  }

}]);
