import React from "react";
import { View, Text } from "react-native";
import useColorScheme from "../hooks/useColorScheme";
import Colors from "../constants/Colors";
import { useNavigation } from "@react-navigation/native";

import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function HeaderLeftContactList() {
  const colorScheme = useColorScheme();
  const navigation = useNavigation();
  const pushBack = () => {
    navigation.goBack();
  };
  return (
    <View
      style={{
        paddingLeft: 10,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <TouchableOpacity activeOpacity={0.8} onPress={pushBack}>
        <MaterialIcons
          name="arrow-back"
          size={24}
          color={Colors[colorScheme].background}
        />
      </TouchableOpacity>
      <View
        style={{
          marginLeft: 30,
        }}
      >
        <Text
          style={{
            color: Colors.light.background,
            fontSize: 22,
          }}
        >
          Select contact
        </Text>
        <Text
          style={{
            color: Colors.light.background,
            marginBottom: 5,
          }}
        >
          9 contacts
        </Text>
      </View>
    </View>
  );
}
