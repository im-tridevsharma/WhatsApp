import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { User } from "../types";
import { useNavigation } from "@react-navigation/native";

export type ContactListItemProps = {
  user: User;
};

export default function ContactListItem(props: ContactListItemProps) {
  const { user } = props;
  const navigation = useNavigation();
  return (
    <TouchableOpacity activeOpacity={0.9}>
      <View style={styles.container}>
        <View>
          <Image
            source={{ uri: user.imageUri }}
            style={styles.avtar}
            resizeMode="cover"
          />
        </View>
        <View style={styles.info}>
          <View style={styles.topmsg}>
            <Text style={styles.name}>{user.name}</Text>
          </View>
          <View>
            <Text numberOfLines={1} style={{ color: "gray" }}>
              {user.status}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  avtar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  container: {
    padding: 10,
    flexDirection: "row",
  },
  info: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  topmsg: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  name: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
