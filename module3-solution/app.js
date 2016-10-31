(function() {
    'use strict';

    angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .constant('ApiBasePath', " https://davids-restaurant.herokuapp.com/menu_items.json")
    .directive('foundItems', FoundItems);

    function FoundItems() {
        var ddo = {
            templateUrl: 'foundItems.html',
            scope: {
                foundItemsList: '<',
                onRemove: '&'
            },
            controller: NarrowItDownController,
            controllerAs: 'searchCtrl',
            bindToController: true
        };
        return ddo;
    }

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        var menu_items = this;
        menu_items.foundArray = [];
        menu_items.searchTermItems = function(searchItems) {
            menu_items.foundArray = MenuSearchService.getMatchedMenuItems(searchItems);
            menu_items.foundArray.then(function(response) {
                menu_items.found = response;
            }).catch(function(error) {
                console.log("Something went terribly wrong");
            });

        };
        menu_items.removeItem = function(itemIndex) {
            menu_items.found.splice(itemIndex, 1);
        };
    };

    MenuSearchService.$inject = ['$http', 'ApiBasePath'];
    function MenuSearchService($http, ApiBasePath) {
        var service = this;
        service.getMatchedMenuItems = function(searchTerm) {
            return $http({
                method: "GET",
                url: ApiBasePath,
            }).then(function(result) {
                // process result and only keep items that match
                service.foundItems = [];
                angular.forEach(result.data, function(values, key) {
                    angular.forEach(values, function(value, key) {
                        if ((value.description.indexOf(searchTerm) !== -1) && searchTerm != "") {
                            service.foundItems.push(value);
                        };
                    });
                });
                // return processed items
                return service.foundItems;
            })
        }
    };

})();
