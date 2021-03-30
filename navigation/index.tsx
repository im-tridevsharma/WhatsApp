import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';
import Colors from '../constants/Colors';

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import MainTabNavigator from './MainTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import useColorScheme from '../hooks/useColorScheme';
import HeaderRight from '../components/HeaderRight'
import ChatRoom from '../screens/ChatRoom';
import HeaderLeftChatRoom from '../components/HeaderLeftChatRoom'
import HeaderRightChatRoom from '../components/HeaderRightChatRoom';
// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  const colorScheme = useColorScheme();

  return (
    <Stack.Navigator screenOptions={{ 
      headerStyle:{
        backgroundColor: Colors[colorScheme].tint,
        shadowOpacity: 0,
        elevation:0
      },
      headerTintColor: Colors[colorScheme].background,
      headerTitleAlign: "left",
      headerTitleStyle: {
        fontSize: 24
      },
      headerRight: () => (
        <HeaderRight />
      )
    }}>
      <Stack.Screen name="Root" component={MainTabNavigator} 
      options={{
        title: "WhatsApp"
      }}
      />
      <Stack.Screen 
        name="ChatRoom" 
        component={ChatRoom} 
        options={({route}) => ({ 
          headerLeft: () => (
            <HeaderLeftChatRoom 
              name={route.params.user.name}
              image={route.params.user.imageUri}  
            />
          ),
          headerTitle: () => null,
          headerRight: () => (<HeaderRightChatRoom />)
        })} 
      />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}
