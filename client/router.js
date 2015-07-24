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
              techName: function($meteor, $stateParams) {
                var techName = $meteor.object(Technologies, $stateParams.techId).name || "";
                return techName;
              },
              $title: function(techName) {
                return techName + ' Overview';
              }
            }
          })
          .state('technologyDetails.documentation', {
            templateUrl: 'client/technologies/views/technology-docs.ng.html',
            resolve: {
              $title: function(techName) {
                return techName + ' Documentation';
              }
            }
          })
          .state('technologyDetails.articles', {
            templateUrl: 'client/technologies/views/technology-articles.ng.html',
            resolve: {
              $title: function(techName) {
                return techName + ' Articles';
              }
            }
          })
          .state('technologyDetails.videos', {
            templateUrl: 'client/technologies/views/technology-videos.ng.html',
            resolve: {
              $title: function(techName) {
                return techName + ' Videos';
              }
            }
          })
          .state('technologyDetails.questions', {
            templateUrl: 'client/technologies/views/technology-questions.ng.html',
            resolve: {
              $title: function(techName) {
                return techName + ' Questions';
              }
            }
          });

          $urlRouterProvider.otherwise('/');
    }]);
