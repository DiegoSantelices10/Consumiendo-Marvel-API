import React, {useState} from 'react';
import { StyleSheet } from 'react-native';
import { NativeBaseProvider, Text, Box } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './Views/HomePage'
import {HeroCard} from './Views/HeroCard'
import Comics from './Views/Comics'
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer'
import 'react-native-gesture-handler';


//const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator()

export default function App() {
 
  return (
    <NavigationContainer>
    <Drawer.Navigator>  
    <Drawer.Screen name="HomePage" component={HomePage} />
    <Drawer.Screen name="HeroCard" component={HeroCard} />
    <Drawer.Screen name="Comics" component={Comics} />
   
    </Drawer.Navigator>
  </NavigationContainer>
  );
}


const style = StyleSheet.create({
  backgroundColor: {
    backgroundColor: `#dc143c`
  },
  text:{
    textAlign:"center"
  }
})