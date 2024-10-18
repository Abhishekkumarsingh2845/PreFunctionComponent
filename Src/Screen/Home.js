import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import First from "../BottomTab/First";
import Second from "../BottomTab/Second";
import profile from "./../../Src/assets/profile.png";
import home from "./../../Src/assets/house.png";
const Tab = createBottomTabNavigator();

export default function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="first"
        component={First}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={home}
              style={{
                width: 24,
                height: 24,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="second"
        component={Second}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={profile}
              style={{
                width: 24,
                height: 24,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
