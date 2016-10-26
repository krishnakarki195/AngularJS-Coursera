(function(){
'use strict';

angular.module('ShoppingList',[])
  .controller('BuyController',BuyController)
  .controller('BoughtController',BoughtController)
  .service('ShoppingListService',ShoppingListService);

  ToBuyController.$inject=['ShoppingListService'];
  BoughtController.$inject=['ShoppingListService'];

  function BuyController(ShoppingListService){
    var ctrl1=this;
    ctrl1.items=ShoppingListService.getItems();
    ctrl1.boughtItem = function(itemIndex) {
      ShoppingListService.removeItem(itemIndex);
    };
  }

  function BoughtController(ShoppingListService){
    var ctrl2=this;
    ctrl2.items2=ShoppingListService.addToList2();
  }

  function ShoppingListService() {
    var service=this;
    var boughtList=[];
    var toBuyList = [
      {
        name: "Cheerios",
        quantity: "3"
      },
      {
        name: "Breads",
        quantity: "2"
      },
      {
        name: "Cookies",
        quantity: "5"
      },
      {
        name: "Chocolate",
        quantity: "5"
      },
      {
        name:"Honey",
        quantity:"1"
      }
    ];
    service.removeItem = function (itemIndex) {
      service.addToList2(itemIndex);
      toBuyList.splice(itemIndex, 1);
    };
    service.addToList2=function (itemIndex) {
      boughtList.push(toBuyList[itemIndex]);
      return boughtList;
    };
    service.getItems = function () {
        return toBuyList;
    };
  }

})();
