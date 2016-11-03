(function () {
'use strict';

angular.module('Data')
.component('itemz', {
  templateUrl: 'src/shoppinglist/templates/item-detail.template.html',
  bindings: {
    items: '<'
  }
});

})();
