angular.module('testApp', [])
  .controller('MyController', ['$scope', 'name' function($scope, name) {
    
    $scope.mode = "Normal mode";
    $scope.settingsTemplate = "";
    $scope.settings = {
      color: "default",
      fontStyle: ""
    };
    //   font-style: "deleted"
    // };
    
    $scope.switchMode = function() {
      if ($scope.mode == "Normal mode") {
        $scope.mode = "Edit properties mode";
      } else {
        $scope.mode = "Normal mode";
        $scope.settingsTemplate = "";
      }
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
    };

    $scope.infoWidgetClicked = function() {
      if ($scope.mode == "Edit properties mode") {
        $scope.settingsTemplate = "infoWidgetSettingsTemplate.html";
        // var settings = document.getElementsByClassName("button-one-settings")[0]; 
        // var result = angular.element(settings);
        // result.text("");
        // result.append("Hello");
      }
    };

  }])
  .service('name', ['', function(){
    var test ={};

    this.getData = function() {
      return test;
    }
    
    this.setdata = function(newVal) {
      test = newVal;
    }
  }])

