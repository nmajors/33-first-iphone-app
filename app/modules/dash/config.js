function config($stateProvider) {
  $stateProvider
    .state('tab.dash', {
      url: '/dash',
      views: {
        'tab-dash': {
          controller: 'DashController as dashCtrl',
          template: require('./view.html')
        }
      }
    });
}

export default config;
