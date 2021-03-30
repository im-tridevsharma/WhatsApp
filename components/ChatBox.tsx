import React from "react";
import { View, Text, StyleSheet } from "react-native";
import useColorScheme from "../hooks/useColorScheme";
import Colors from "../constants/Colors";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

import {
  MaterialCommunityIcons,
  FontAwesome5,
  Entypo,
} from "@expo/vector-icons";

export default function ChatBox() {
  const colorScheme = useColorScheme();
  const [message, setMessage] = React.useState("");

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <TouchableOpacity activeOpacity={0.8}>
          <FontAwesome5 name="laugh-beam" size={24} color="gray" />
        </TouchableOpacity>
        <TextInput
          multiline
          style={styles.inputBox}
          onChangeText={setMessage}
          placeholder="Type a message"
        />
        <TouchableOpacity activeOpacity={0.8}>
          <Entypo name="attachment" size={24} color="gray" />
        </TouchableOpacity>
        {!message && (
          <TouchableOpacity activeOpacity={0.8}>
            <FontAwesome5
              name="camera"
              size={24}
              color="gray"
              style={styles.icon}
            />
          </TouchableOpacity>
        )}
      </View>
      <TouchableOpacity activeOpacity={0.8}>
        <View style={styles.rightContainer}>
          {!message ? (
            <MaterialCommunityIcons
              name="microphone"
              size={24}
              color={Colors[colorScheme].background}
            />
          ) : (
            <MaterialCommunityIcons
              name="send"
              size={24}
              color={Colors[colorScheme].background}
            />
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    padding: 10,
    flexDirection: "row",
    alignItems: "flex-end",
  },
  leftContainer: {
    flex: 1,
    backgroundColor: Colors.light.background,
    borderRadius: 30,
    marginRight: 10,
    flexDirection: "row",
    alignItems: "flex-end",
    paddingHorizontal: 15,
    paddingVertical: 12,
  },
  rightContainer: {
    width: 52,
    height: 52,
    borderRadius: 30,
    backgroundColor: Colors.light.tint,
    justifyContent: "center",
    alignItems: "center",
  },
  inputBox: {
    flex: 1,
    fontSize: 15,
    marginHorizontal: 10,
  },
  icon: {
    marginLeft: 15,
  },
});
