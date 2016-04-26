class ChatsDetailController {
  constructor($stateParams, ChatsService) {
    this.chat = ChatsService.get($stateParams.chatId);
  }
}

export default ChatsDetailController;
