















import * as React from "react";
import { Button, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Drawer1 from "../Drawer/Drawer1";
import Drawer2 from "../Drawer/Drawer2";

const Drawer = createDrawerNavigator();

export default function DrawerMain() {
  return (
   
      <Drawer.Navigator>
        <Drawer.Screen name="Profile" component={Drawer1} />
        <Drawer.Screen name="Setting" component={Drawer2} />
      </Drawer.Navigator>
   
  );
}
