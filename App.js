import React from "react";
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { navigationRef } from './Views/RootNavigation';
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome"

import "react-native-gesture-handler";


import StackLogin from "./Components/StackLogin";

export default function App() {
  return (
   

      <NavigationContainer ref={navigationRef}>
       <StackLogin/>
      </NavigationContainer>
    
  );
}

