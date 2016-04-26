function config($stateProvider) {
  $stateProvider
    .state('tab.account', {
      url: '/account',
      views: {
        'tab-account': {
          controller: 'AccountController as accountCtrl',
          template: require('./view.html')
        }
      }
    });
}

export default config;
