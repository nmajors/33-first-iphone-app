class MoviesController {
  constructor($firebaseArray, $ionicModal, $scope, $http) {
    let ref = new Firebase ("https://nms-movies.firebaseio.com/");
    this.movies = $firebaseArray(ref);
    this._$http = $http;
    this.modal = $ionicModal.fromTemplate(require('./views/form.html'), {
      scope: $scope
    })
    // this.movies = [];
    this.movieTitle = "";
    this.showDelete=false;



  }

// function($scope) {
//   $scope.data = {
//     showDelete: false
//   };
//   $scope.onItemDelete = function(item) {
//     $scope.items.splice($scope.items.indexOf(item), 1);
//   };
//    $scope.items = this.movies;
// }



  showForm(){
    this.modal.show();
  }


  addMovie(){
    let movieTitle=this.movieTitle;
    this._$http
		.get(`http://www.omdbapi.com/?t=${this.movieTitle}&y=&plot=short&r=json`)
		.then((response) =>{
			this.movie=response.data;
      this.movies.$add(this.movie);
      console.log(this.movies);
		});
    this.modal.hide();
    this.movieTitle="";
  }

  toggleDelete(){
    this.showDelete = !this.showDelete;
    console.log(this.showDelete);
  }

  deleteMovie(movie){
    console.log("deleting " + movie);
    this.movies.$remove(movie);
  }
}

export default MoviesController;
