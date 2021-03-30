import React from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import useColorScheme from "../hooks/useColorScheme";
import Colors from "../constants/Colors";

import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export type HeaderLeftChatRoomProps = {
  name: String;
  image: String;
};

export default function HeaderLeftChatRoom(props: HeaderLeftChatRoomProps) {
  const { name, image } = props;
  const colorScheme = useColorScheme();
  const navigation = useNavigation();
  const pushBack = () => {
    navigation.goBack();
  };
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        marginRight: 10,
        paddingLeft: 10,
        alignItems: "center",
      }}
    >
      <TouchableOpacity onPress={pushBack} activeOpacity={0.9}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <MaterialIcons
            name="arrow-back"
            size={24}
            color={Colors[colorScheme].background}
          />
          <Image
            source={{ uri: image }}
            style={{ width: 40, height: 40, borderRadius: 30 }}
          />
        </View>
      </TouchableOpacity>
      <View>
        <Text
          style={{
            marginLeft: 10,
            fontSize: 20,
            fontWeight: "bold",
            color: Colors[colorScheme].background,
          }}
        >
          {name}
        </Text>
        <Text
          style={{
            marginLeft: 10,
            fontSize: 10,
            color: Colors[colorScheme].background,
          }}
        >
          last seen today at 20:10
        </Text>
      </View>
    </View>
  );
}
