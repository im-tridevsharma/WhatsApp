import React from "react";
import { View, Text } from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import NewGroupContactButton from "../components/NewGroupContactButton";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";

import contacts from "../data/contacts";
import ContactListItem from "../components/ContactListItem";

export default function NewChatList() {
  const colorScheme = useColorScheme();
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          backgroundColor: Colors[colorScheme].background,
        }}
      >
        <NewGroupContactButton />
        <View>
          <FlatList
            data={contacts}
            keyExtractor={(user) => user.userID}
            renderItem={({ item }) => <ContactListItem user={item} />}
          />
        </View>
      </View>
    </ScrollView>
  );
}
