import angular from 'angular';

import config from './config';
import controller from './controller';

let tabs = angular.module('tabs', []);

tabs.config(config);
tabs.controller(controller);

export default tabs;
