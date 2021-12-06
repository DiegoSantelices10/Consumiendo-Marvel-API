import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/FontAwesome"
import s from '../Style/Style'
import Login from '../Views/Login'
import MenuDrawer from './MenuDrawer'
const Stack = createStackNavigator();

export default function StackLogin() {
    return (
        <Stack.Navigator initialRouteName="Login" >
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="MenuDrawer" component={MenuDrawer}  options={{ headerShown: false }} />
      </Stack.Navigator>
    )
}
