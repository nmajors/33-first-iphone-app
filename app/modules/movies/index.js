import angular from 'angular';

import config from './config';
import moviesController from './controller';


let movies = angular.module('tiy.movies', []);

movies.config(config);
movies.controller('MoviesController', moviesController);

export default movies;
