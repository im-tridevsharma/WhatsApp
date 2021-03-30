import * as React from 'react';
import { StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ChatListItem from '../components/ChatListItem';

import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import chatRooms from '../data/chatRoom'

export default function ChatsScreen() {
  const colorScheme = useColorScheme();
  return (
    <View style={{flex:1, backgroundColor: Colors[colorScheme].background}}>
        <FlatList 
        vertical
        data={chatRooms}
        keyExtractor={(room)=>room.chatRoomID}
        renderItem={({item}) => <ChatListItem chatRoom={item}/>}
        />
    </View>
  );
}

const styles = StyleSheet.create({
    
});
