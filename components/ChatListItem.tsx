import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ChatRoom } from '../types'
import moment from 'moment'
import { useNavigation } from '@react-navigation/native'

export type ChatListItemProps = {
    chatRoom: ChatRoom
}


export default function ChatListItem(props: ChatListItemProps){
    const { chatRoom } = props;
    const navigation = useNavigation();
    const OnClick = () => {
        navigation.navigate("ChatRoom", {user: chatRoom.user})
    }
    return(
        <TouchableOpacity onPress={OnClick} activeOpacity={0.9}>
            <View style={styles.container}>
                <View>
                    <Image source={{uri: chatRoom.user.imageUri}} style={styles.avtar} resizeMode="cover"/>
                </View>
                <View style={styles.info}>
                    <View style={styles.topmsg}>
                        <Text style={styles.name}>{chatRoom.user.name}</Text>
                        <Text style={{color:'gray'}}>{moment(chatRoom.lastMessage.createdAt,"YYYY-MM-DD HH:II").fromNow()}</Text>
                    </View>
                    <View>
                        <Text numberOfLines={1} style={{color:'gray'}}>{chatRoom.lastMessage.content}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    avtar: {
        width: 50,
        height: 50,
        borderRadius: 30
    },
    container:{
        paddingVertical: 10,
        paddingHorizontal:15,
        flexDirection: "row",
    },
    info:{
        flex:1,
        justifyContent:"center",
        paddingHorizontal: 10,
        borderBottomColor: 'lightgray',
        paddingBottom:15,
        borderBottomWidth: 1
    },
    topmsg:{
        flexDirection: "row",
        justifyContent: "space-between"
    },
    name:{
        fontWeight: "bold",
        fontSize: 18
    }
})