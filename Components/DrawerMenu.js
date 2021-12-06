import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { createDrawerNavigator } from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/FontAwesome"
import s from '../Style/Style'

export default function DrawerMenu(props) {
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