import angular from 'angular';

import config from './config';
import controller from './controller';

let account = angular.module('account', []);

account.config(config);
account.controller('AccountController', controller);

export default account;
