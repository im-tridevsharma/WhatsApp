import React from "react";
import { View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/core";

export default function NewChatButton() {
  const navigation = useNavigation();
  const colorScheme = useColorScheme();
  return (
    <View
      style={{
        position: "absolute",
        bottom: 10,
        right: 10,
        width: 60,
        height: 60,
        backgroundColor: Colors.light.tint,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TouchableOpacity
        onPress={() => navigation.navigate("ContactList")}
        activeOpacity={0.8}
      >
        <MaterialIcons
          name="chat-bubble"
          size={26}
          color={Colors[colorScheme].background}
        />
      </TouchableOpacity>
    </View>
  );
}
