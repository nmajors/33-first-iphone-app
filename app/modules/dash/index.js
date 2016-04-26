import angular from 'angular';

import config from './config';
import controller from './controller';

let dash = angular.module('dash', []);

dash.config(config);
dash.controller('DashController', controller);

export default dash;
