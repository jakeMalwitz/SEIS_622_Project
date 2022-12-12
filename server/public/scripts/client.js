var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(["$routeProvider", function($routeProvider){
  $routeProvider.
      when("/appetizers", {
        templateUrl: "/views/appetizers.html"
      }).
      when("/entrees", {
        templateUrl: "/views/entrees.html",
      }).
      when("/breads", {
        templateUrl: "/views/breads.html",
      }).
      when("/desserts", {
        templateUrl: "/views/desserts.html",
      }).
      otherwise({
        redirectTo: "/appetizers"
      });
}]).service('cart', function() {
  var cart = [];
  var subtotal = 0.00;

  return {
    addItem: function(item) {
      if(item.quantity < 1) {
        cart.push(item);
      }
      item.quantity++;
      subtotal += item.price;
    },
    removeItem: function(item) {
      let index = cart.indexOf(item);
      if(item.quantity == 1) {
        cart.splice(index, 1);
      }
      item.quantity--;
      subtotal -= item.price;
    },
    removeEntireItem: function(item) {
      let index = cart.indexOf(item);
      cart.splice(index, 1);
      subtotal -= (item.price * item.quantity);
      item.quantity = 0;
    },
    getCart: function() {
      return cart;
    },
    getSubtotal: function() {
      return subtotal;
    },
    clear: function() {
      cart = [];
      subtotal = 0.00;
    }
  }
});
