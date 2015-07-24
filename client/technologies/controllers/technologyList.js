angular.module('devStop')
  .controller("TechnologyListController", ['$scope', '$meteor',
    function($scope, $meteor) {

      $scope.$meteorSubscribe('technologies').then(function(subscriptionHandle){

        $scope.technologies = $meteor.collection(Technologies);

        console.log("Technologies subscribed");
      });
    }]);