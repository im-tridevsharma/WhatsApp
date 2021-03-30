import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";

export default function NewGroupContactButton() {
  const colorScheme = useColorScheme();
  return (
    <View>
      <View style={styles.buttonContainer}>
        <View style={styles.iconContainer}>
          <MaterialIcons
            name="group"
            size={22}
            color={Colors[colorScheme].background}
          />
        </View>
        <Text style={styles.btnTitle}>New group</Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.iconContainer}>
          <Ionicons
            name="person-add"
            size={22}
            color={Colors[colorScheme].background}
          />
        </View>
        <Text style={styles.btnTitle}>New contact</Text>
        <Ionicons
          style={{ marginRight: 30 }}
          name="qr-code"
          size={24}
          color={Colors[colorScheme].tint}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "limegreen",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
  },
  buttonContainer: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  btnTitle: {
    fontSize: 18,
    flex: 1,
  },
});
