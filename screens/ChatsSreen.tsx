import * as React from "react";
import { StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import ChatListItem from "../components/ChatListItem";

import { View } from "../components/Themed";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import chatRooms from "../data/chatRoom";
import NewChatButton from "../components/NewChatButton";

export default function ChatsScreen() {
  const colorScheme = useColorScheme();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors[colorScheme].background,
      }}
    >
      <FlatList
        data={chatRooms}
        keyExtractor={(room) => room.chatRoomID}
        renderItem={({ item }) => <ChatListItem chatRoom={item} />}
      />
      <NewChatButton />
    </View>
  );
}

const styles = StyleSheet.create({});
