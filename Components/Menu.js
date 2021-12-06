import { View, Text, TouchableOpacity, Image } from 'react-native';
import { createDrawerNavigator } from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/FontAwesome"
import s from '../Style/Style'
import React from 'react'
import DrawerMenu from './DrawerMenu';

export default function Menu(props) {

let token = props.params
    return (
      <View style={s.container}>
        <View style={s.bgContainer}>
          <TouchableOpacity>
            <View style={s.userContainer}>
              <Image style={s.userImagen} source={require('../assets/img/marvel-logo-menu.jpg')} />
            </View>
            <View style={s.userNombre}>
              <Text style={s.userTitulo}>MarvelApps</Text>
            </View>
          </TouchableOpacity>
        </View>
        <DrawerMenu iconName='home' titleName='Home' navigation={() => props.navigation.navigate('HomePage', {params: token})}  />
        <DrawerMenu iconName='user' titleName='Comics' navigation={() => props.navigation.navigate('Comics')} />
       
      </View>
    )
  }
