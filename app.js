(function (){
  'use strict';

  angular.module('myFirstApp', [])

  .controller('myFirstController', function($scope){

      $scope.name = "";
      $scope.totalValue = 0;
      $scope.displayNumeric = function(){
        var totalValue = calculateTotalNumericValue($scope.name);
        $scope.totalValue = totalValue;
      };

      function calculateTotalNumericValue(string){
        var numericValue = 0;
        for (var i=0; i<string.length; i++){
          numericValue += string.charCodeAt(i);
        }
        return numericValue;
      }

  });

})();
