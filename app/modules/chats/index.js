import angular from 'angular';

import config from './config';
import listController from './controllers/list';
import detailsController from './controllers/details';
import service from './service';

let chats = angular.module('chats', []);

chats.config(config);
chats.controller('ChatsController', listController);
chats.controller('ChatsDetailController', detailsController);
chats.service('ChatsService', service);


export default chats;
