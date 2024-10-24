import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import box from './box'
import Favorrite from './Favorrite'

const Stack=createNativeStackNavigator();

const FavouriteNav = () => {
  return (
   
    <Stack.Navigator>
        <Stack.Screen  name="Box" component={box} />
        <Stack.Screen  name="Favorite"  component={Favorrite}/>
    </Stack.Navigator>
  
  )
}

export default FavouriteNav

const styles = StyleSheet.create({})