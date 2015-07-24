angular.module('devStop')
  .controller('TechnologyDetailsController', ['$scope', '$meteor', '$stateParams',
    function ($scope, $meteor, $stateParams) {

      $scope.$meteorSubscribe('technologies', $stateParams.techId).then(function(subscriptionHandle){

        $scope.technology = $meteor.object(Technologies, $stateParams.techId);

        console.log("Subscribed to " + $scope.technology.name);
      });
    }]);