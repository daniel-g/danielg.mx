angular.module('Application', []).controller('HeaderController', ['$scope', function($scope){
  $scope.palmClasses = ["blue", "red", "yellow", 'green'];
  $scope.palmClass = 'blue';
  $scope.randomPalm = function(){
    $scope.palmClass = $scope.palmClasses[Math.floor(Math.random() * $scope.palmClasses.length)]
  }
}]);
