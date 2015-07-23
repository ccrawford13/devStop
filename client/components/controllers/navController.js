angular.module('devStop')
  .controller('NavigationController', ['$scope', '$mdSidenav',
    function($scope, $mdSidenav) {

      $scope.openLeftMenu = function() {
        $mdSidenav('left').toggle();
      };
    }]);