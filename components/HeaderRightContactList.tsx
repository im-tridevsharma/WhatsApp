import React from "react";
import { View, TouchableOpacity } from "react-native";
import useColorScheme from "../hooks/useColorScheme";
import Colors from "../constants/Colors";

import { Octicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function HeaderRightContactList() {
  const colorScheme = useColorScheme();
  return (
    <View
      style={{
        flexDirection: "row",
        width: 60,
        justifyContent: "space-between",
        alignItems: "center",
        marginRight: 10,
      }}
    >
      <TouchableOpacity activeOpacity={0.9}>
        <Octicons
          name="search"
          size={20}
          color={Colors[colorScheme].background}
        />
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.9}>
        <MaterialCommunityIcons
          name="dots-vertical"
          size={24}
          color={Colors[colorScheme].background}
        />
      </TouchableOpacity>
    </View>
  );
}
