function config($stateProvider){
  $stateProvider
  .state('movies', {
    url: '/movies',
    controller: 'MoviesController as moviesCtrl',
    template: require('./views/movies.html')
  });
}

export default config;
