(function() {
    'use strict';

    angular.module('Data')
        .controller('ItemDetailController', ItemDetailController);


    ItemDetailController.$inject = ['items'];

    function ItemDetailController(items) {
        var mainList = this;
        mainList.items = [];
        mainList.holder = [];

        angular.forEach(items.data, function(values, key) {
            mainList.holder.push(values);
        });

        mainList.items = mainList.holder[0];

    }

})();
