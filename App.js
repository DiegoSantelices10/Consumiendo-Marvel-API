import React from "react";
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { navigationRef } from './Views/RootNavigation';
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/FontAwesome"
import s from './Style/Style'
import "react-native-gesture-handler";
import { createStackNavigator } from '@react-navigation/stack';


import HomePage from "./Views/HomePage";
import { HeroCard } from "./Views/HeroCard";
import Comics from "./Views/Comics";
import Login from "./Views/Login";

const Stack = createStackNavigator();




function DrawerMenu(props) {
  return (
    <TouchableOpacity onPress={props.navigation}>
      <View style={s.menuContainer}>
        <View style={s.iconoContainer}>
          <Icon size={17} name={props.iconName} />
        </View>
        <View style={s.tituloContainer}>
          <Text style={s.tituloTxt}>{props.titleName}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}


function Menu(props) {
  return (
    <View style={s.container}>
      <View style={s.bgContainer}>
        <TouchableOpacity>
          <View style={s.userContainer}>
            <Image style={s.userImagen} source={require('./assets/img/marvel-logo-menu.jpg')} />
          </View>
          <View style={s.userNombre}>
            <Text style={s.userTitulo}>MarvelApps</Text>
          </View>
        </TouchableOpacity>
      </View>
      <DrawerMenu iconName='home' titleName='Home' navigation={() => props.navigation.navigate('HomePage')} />
      <DrawerMenu iconName='user' titleName='Comics' navigation={() => props.navigation.navigate('Comics')} />
      <DrawerMenu titleName='Login' navigation={() => props.navigation.navigate('Login')} />
    </View>
  )
}
const Drawer = createDrawerNavigator();

export default function App() {
  return (
   

      <NavigationContainer ref={navigationRef}>
        <Drawer.Navigator drawerContent={(props) => <Menu {...props} />}>
        <Drawer.Screen name="Login" component={Login} />        
          <Drawer.Screen name="HomePage" component={HomePage} />
          <Drawer.Screen name="HeroCard" component={HeroCard} />
          <Drawer.Screen name="Comics" component={Comics} />

        </Drawer.Navigator>
      </NavigationContainer>
    
  );
}

