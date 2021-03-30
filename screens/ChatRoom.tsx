import React from "react";
import { View, ImageBackground } from "react-native";

import ChatBox from "../components/ChatBox";
import bg from "../assets/images/bg.jpg";

export default function ChatRoom() {
  return (
    <ImageBackground
      source={bg}
      resizeMode="cover"
      style={{ width: "100%", height: "100%" }}
    >
      <View
        style={{
          flex: 1,
        }}
      >
        <ChatBox />
      </View>
    </ImageBackground>
  );
}
