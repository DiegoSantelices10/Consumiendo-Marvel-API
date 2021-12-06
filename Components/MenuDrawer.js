import React, {useState, useEffect} from "react";
import HomePage from "../Views/HomePage";
import HeroCard from "../Views/HeroCard";
import Comics from "../Views/Comics";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Menu from "./Menu";
const Drawer = createDrawerNavigator();

export default function MenuDrawer(props) {
  
  let token = props.route.params.params.accessToken
  return (
      <Drawer.Navigator
        initialRouteName="HomePage"
        drawerContent={(props) => <Menu {...props} params={token} />}
      >
        <Drawer.Screen name="HomePage" component={HomePage} {...props}  />
        <Drawer.Screen name="HeroCard" component={HeroCard} />
        <Drawer.Screen name="Comics" component={Comics} />
      </Drawer.Navigator>
    
  );
}
