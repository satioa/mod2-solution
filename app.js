(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService)

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuy = this;
  toBuy.items = ShoppingListCheckOffService.getToBuyItems();
  toBuy.buy = function(index) {
    ShoppingListCheckOffService.buyItem(index);
  };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var bought = this;
  bought.items = ShoppingListCheckOffService.getBoughtItems();

}

function ShoppingListCheckOffService() {
  var service = this;
  var toBuyItems = [
    { name: "Vegetables", quantity: 6 },
    { name: "Cereals", quantity: 4 },
    { name: "Stationery", quantity: 3 },
    { name: "Television", quantity: 2 },
    { name: "Final Fantasy XV", quantity: 1 }];

  var boughtItems = [];

  service.buyItem = function(index) {
    boughtItems.push(toBuyItems[index]);
    toBuyItems.splice(index, 1);
  };

  service.getToBuyItems = function () {
    return toBuyItems;
  };

  service.getBoughtItems = function () {
    return boughtItems;
  };
}

})();
