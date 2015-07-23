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

          });

          $urlRouterProvider.otherwise('/');
    }]);
