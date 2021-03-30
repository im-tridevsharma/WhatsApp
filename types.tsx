export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
  ChatRoom: undefined;
};

export type MainTabParamList = {
  Camera: undefined;
  Chats: undefined;
  Status: undefined;
  Calls: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type User = {
  userID: String;
  name: String;
  imageUri: String;
}

export type Message = {
  messageID: String;
  content: String;
  createdAt: string;
}

export type ChatRoom = {
  chatRoomID: String;
  user: User;
  lastMessage: Message;
}