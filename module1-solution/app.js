(function (){

  'use strict';

  angular.module('LunchCheck', [])

  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
      $scope.userInput = "";
      $scope.message = "";
      $scope.customStyle = "";
      $scope.checkLunch = function(){
        var count = countLunchItems($scope.userInput);
        if (!count) {
          $scope.message = "Please enter data first!";
          $scope.customStyle = {'color': 'red', 'border':'1px solid red'};
        }
        else {
          if (count && count <= 3) {
            $scope.message = "Enjoy!";
          }
          else if (count > 3) {
            $scope.message = "Too much!";
          }
          $scope.customStyle = {'color': 'green', 'border':'1px solid green'};
        }
      };
  }

  var countLunchItems = function (str) {
    if(str.length === 0) return 0;
    var lunchArray = str.split(',');
    var items = 0;
    for (var i=0; i<lunchArray.length ; i++){
      if(!(lunchArray[i]==="")){
        items += 1;
      }
    }
    return items;
  };


})();
