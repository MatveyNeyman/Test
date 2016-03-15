angular.module('testApp', [])
  .controller('MyController', ['$scope', function($scope) {
    
    $scope.mode = "Normal mode";
    $scope.settingsTemplate = "";
    
    $scope.switchMode = function() {
      if ($scope.mode == "Normal mode") {
        $scope.mode = "Edit properties mode";
      } else {
        $scope.mode = "Normal mode";
        $scope.settingsTemplate = "";
      };
    };

    $scope.buttonOneClicked = function() {
      if ($scope.mode == "Normal mode") {
        alert("Hello World");
      } else {
        $scope.settingsTemplate = "buttonOneSettingsTemplate.html";
        // var settings = document.getElementsByClassName("button-one-settings")[0]; 
        // var result = angular.element(settings);
        // result.text("");
        // result.append("Hello");
      }
       
    }

  }]);