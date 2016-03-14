angular.module('testApp', [])
  .controller('RTLController', function($scope) {
    $scope.changeStyle = function() {
      if ($scope.direction == "rtl") {
        $scope.direction = "ltr";
      } else {
        $scope.direction = "rtl";
      };
    };
    $scope.direction = "ltr";
  });