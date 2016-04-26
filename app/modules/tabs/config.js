function config($stateProvider) {
  $stateProvider
    .state('tab', {
      url: '/tab',
      abstract: true,
      template: require('./view.html')
    });

}

export default config;
