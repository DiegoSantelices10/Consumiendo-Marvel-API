import React, {useState} from 'react';
import { StyleSheet } from 'react-native';
import { NativeBaseProvider, Text, Box } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './HomePage'
import {HeroCard} from './HeroCard'



const Stack = createNativeStackNavigator();

export default function App() {
 
  return (
    <NavigationContainer>
    <Stack.Navigator>  
    <Stack.Screen name="HomePage" component={HomePage} />
    <Stack.Screen name="HeroCard" component={HeroCard} />
   
    </Stack.Navigator>
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