var myApp = angular.module("myApp", []);

myApp.controller('PageController', ['$rootScope', '$scope', function($rootScope, $scope) {
      
    $rootScope.mode = "Normal mode";

    $scope.rslt = {}
    $scope.checked = {}

    $scope.switchMode = function() {
      if ($rootScope.mode == "Normal mode") {
        $rootScope.mode = "Edit properties mode";
      } else {
        $rootScope.mode = "Normal mode";
        $scope.rslt.templateName = "";
      }
    }

    $scope.$on('setTemplateInstanceEvent', function(event, args) {
        $scope.rslt = args;
    });

    $scope.applyClicked = function() {
      $scope.$broadcast('applyEvent', angular.copy($scope.rslt));
      console.log($scope.rslt.color);
    }
}]);

myApp.directive('buttonDirective', ['$rootScope', function($rootScope) {
  return {
    scope: true,
    restrict: 'A',
    link: function($scope, iElm, iAttrs, controller) {

      $scope.button = {}

      $scope.buttonOneClicked = function() {
        if ($rootScope.mode == "Normal mode") {
          alert("Hello From One");
        } else {
          $scope.setTemplateInstance();
        }
      }

      $scope.buttonTwoClicked = function() {
        if ($rootScope.mode == "Normal mode") {
          alert("Hello From Two");
        } else {
          $scope.setTemplateInstance();
        }
      }

      $scope.setTemplateInstance = function() {
        if (!$scope.button.color) {
          $scope.button.color = "default";
        }
        $rootScope.$broadcast('setTemplateInstanceEvent', {templateName: "buttonOneSettingsTemplate.html", id: iAttrs.id, color: $scope.button.color});
      }

      $scope.$on('applyEvent', function(event, args) {
        if (args.id == iAttrs.id) {
          $scope.button = args;
        }
      });
    }
  };
}]);
