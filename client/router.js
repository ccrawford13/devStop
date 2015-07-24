angular.module('devStop')
  .config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
    function($urlRouterProvider, $stateProvider, $locationProvider) {
      $locationProvider.html5Mode(true);

      $stateProvider
          .state('welcome', {
            url: '/',
            templateUrl: 'client/welcome/views/welcome.ng.html',
            controller: 'WelcomeController',
            resolve: {
              $title: function() {
                return 'Welcome to devStop'
              }
            }
          })
          .state('technologyDetails', {
            url: '/technologies/:techId',
            templateUrl: 'client/technologies/views/technology-details.ng.html',
            controller: 'TechnologyDetailsController',
            resolve: {
              $title: function($meteor, $stateParams) {
                var techName = $meteor.object(Technologies, $stateParams.techId).name || "";
                return techName + ' Details';
              }
            }
          });

          $urlRouterProvider.otherwise('/');
    }]);
