var myApp = angular.module("myApp", []);

myApp.factory('myFactoryService', function() {

    var data = {}
      
    return {
        setData: function(passedData) {
          for (var field in passedData) {
              data[field] = passedData[field];
          }
        },

        getData: function() {
            return data;
        }
    }
});


myApp.controller('FirstController', function($scope, myFactoryService) {
      
    $scope.mode = "Normal mode";

    $scope.settings = myFactoryService.getData();

    $scope.switchMode = function() {
      if ($scope.mode == "Normal mode") {
        $scope.mode = "Edit properties mode";
      } else {
        $scope.mode = "Normal mode";
        $scope.settings.templateName = "";
      }
    }

    $scope.buttonOneClicked = function() {
      if ($scope.mode == "Normal mode") {
        alert("Hello World");
      } else {
        myFactoryService.setData({templateName: "buttonOneSettingsTemplate.html"});
      }
    }

    $scope.infoWidgetClicked = function() {
      if ($scope.mode == "Edit properties mode") {
        myFactoryService.setData({templateName: "infoWidgetSettingsTemplate.html"});
      }
    }
});

myApp.controller('SecondController', function($scope, myFactoryService) {

    $scope.rslt = myFactoryService.getData();

    $scope.rslt.templateName = "";
    $scope.rslt.color = "default";
    $scope.rslt.fontStyle = "default";

});