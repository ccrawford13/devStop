angular.module('devStop')
  .config(function($mdThemingProvider) {
      $mdThemingProvider.theme('default')
          .primaryPalette('light-green')
          .accentPalette('blue');
    });