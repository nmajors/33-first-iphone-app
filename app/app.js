import angular from 'angular';
import uiRouter from 'angular-ui-router';

import movies from './modules/movies'



let App = angular.module('app', [
  'ionic',
  'ui.router',

  'tiy.movies'
]);

function config($urlRouterProvider) {
  $urlRouterProvider.otherwise("/movies");
}

App.config(config);


function run($ionicPlatform) {
  $ionicPlatform.ready(() => {
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }

    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
}

App.run(run);
