myApp.controller("menuController",  ["$scope", "$http", "cart", function($scope, $http, cart) {

   $scope.appetizers = [];
   $scope.entrees = [];
   $scope.breads = [];
   $scope.desserts = [];

   getMenuItems();

   //Get menu items
   function getMenuItems() {
     $http.get('/menuItems')
     .then(function(response) {
       response.data.forEach (item =>
         sortMenuItems(item)
       );
     });
   };

   //Sort menu items
   function sortMenuItems(item) {
     switch(item.type) {
       case 'A':
       $scope.appetizers.push(item);
       break;
       case 'E':
       $scope.entrees.push(item);
       break;
       case 'B':
       $scope.breads.push(item);
       break;
       case 'D':
       $scope.desserts.push(item);
       break;
       default:
       alert("Not a valid type!");
     }
   }

   //Add item to cart
   $scope.addItemToCart = function(item) {
     if(!item.quantity) {
       item.quantity = 0;
     }
     cart.addItem(item);
   }

}]);
