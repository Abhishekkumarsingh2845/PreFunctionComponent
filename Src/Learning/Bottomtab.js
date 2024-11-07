import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Home from '../Screen/Home';
import Services from '../Screen/Services';
import MyRides from '../Screen/MyRides';
import Wallet from '../Screen/Wallet';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#222E50',
          height: 70,
          paddingBottom: 15,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('./../Assets/Images/Vector.png')}
              style={[
                styles.img,
                {tintColor: focused ? '#FFFFFF' : '#B2B5C499'},
              ]}
            />
          ),
          tabBarLabel: ({focused}) => (
            <Text
              style={[styles.txt, {color: focused ? '#FFFFFF' : '#B2B5C499'}]}>
              Home
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Services"
        component={Services}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('./../Assets/Images/truckfast.png')}
              style={[
                styles.img,
                {tintColor: focused ? '#FFFFFF' : '#B2B5C499'},
              ]}
            />
          ),
          tabBarLabel: ({focused}) => (
            <Text
              style={[styles.txt, {color: focused ? '#FFFFFF' : '#B2B5C499'}]}>
              Services
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="MyRides"
        component={MyRides}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('./../Assets/Images/clipboardtick.png')}
              style={[
                styles.img,
                {tintColor: focused ? '#FFFFFF' : '#B2B5C499'},
              ]}
            />
          ),
          tabBarLabel: ({focused}) => (
            <Text
              style={[styles.txt, {color: focused ? '#FFFFFF' : '#B2B5C499'}]}>
              My Rides
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={Wallet}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('./../Assets/Images/wallet2.png')}
              style={[
                styles.img,
                {tintColor: focused ? '#FFFFFF' : '#B2B5C499'},
              ]}
            />
          ),
          tabBarLabel: ({focused}) => (
            <Text
              style={[styles.txt, {color: focused ? '#FFFFFF' : '#B2B5C499'}]}>
              Wallet
            </Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;

const styles = StyleSheet.create({
  img: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  txt: {
    fontSize: 12,
    fontWeight: 400,
  },
});
