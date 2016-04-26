class MoviesController {
  constructor($ionicModal, $scope, $http) {
    this._$http = $http;
    this.modal = $ionicModal.fromTemplate(require('./views/form.html'), {
      scope: $scope
    })
    this.movies = [];
    this.movieTitle="";

  }

  showForm(){
    this.modal.show();
  }
  addMovie(){
    let movieTitle=this.movieTitle;
    this._$http
		.get(`http://www.omdbapi.com/?t=${this.movieTitle}&y=&plot=short&r=json`)
		.then((response) =>{
			this.movie=response.data;
      this.movies.push(this.movie);
      console.log(this.movies);
		});
    this.modal.hide();
    this.movieTitle="";
  }
}

export default MoviesController;
