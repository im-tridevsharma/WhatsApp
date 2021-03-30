import React from 'react'
import { View, Text } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import useColorScheme from '../hooks/useColorScheme';
import Colors from '../constants/Colors';

import { Ionicons } from '@expo/vector-icons';

export default function ChatRoom(){
    const route = useRoute()
    const colorScheme = useColorScheme();
    const renderChatBox = () => {
        return(
            <View
            style={{
                position: "absolute",
                bottom: 0,
                right:0,
                width: "103%",
                paddingTop:5,
                alignItems: "center",
                flexDirection: "row"
            }}
            >
                <TextInput 
                style={{
                    height:50,
                    width: "83%",
                    backgroundColor: "rgba(0,0,0,.06)",
                    borderRadius: 30,
                    paddingLeft: 40,
                    paddingRight:10,
                    marginBottom: 5,
                }}
                placeholder="Type a message"/>
                <TouchableOpacity activeOpacity={0.9}>
                    <View
                    style={{
                        backgroundColor: Colors[colorScheme].tint,
                        height: 50,
                        width: 50,
                        borderRadius: 30,
                        alignItems: "center",
                        justifyContent: "center",
                        marginLeft: 5,
                        marginBottom: 5
                    }}
                    >
                        <Ionicons name="mic-sharp" size={24} color="white" />
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    return(
        <View
        style={{
            paddingHorizontal: 10,
            paddingVertical: 10,
            backgroundColor: "white",
            flex:1
        }}
        >
            {renderChatBox()}
        </View>
    )
}