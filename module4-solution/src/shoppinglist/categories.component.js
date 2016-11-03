(function () {
'use strict';

angular.module('Data')
.component('categories', {
  templateUrl: 'src/shoppinglist/templates/categories.template.html',
  bindings: {
    items: '<'
  }
});

})();
