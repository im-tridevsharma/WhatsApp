import React from "react";
import { View, Text } from "react-native";

import ChatBox from "../components/ChatBox";

export default function ChatRoom() {
  return (
    <View
      style={{
        backgroundColor: "#ECE5DD",
        flex: 1,
      }}
    >
      <ChatBox />
    </View>
  );
}
