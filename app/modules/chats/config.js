function config($stateProvider) {
  $stateProvider
    .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          controller: 'ChatsController as chatsCtrl',
          template: require('./views/list.html')
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          controller: 'ChatsDetailController as detailCtrl',
          template: require('./views/details.html')
        }
      }
    });

}

export default config;
