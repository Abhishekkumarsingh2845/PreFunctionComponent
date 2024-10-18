import { StyleSheet, Text, View } from 'react-native'
import React,{useEffect} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Drawer2 = () => {
  useEffect(() => {
    AsyncStorage.setItem("last", "Setting");
  }, []);
  return (
    <View>
      <Text>Drawer2</Text>
    </View>
  )
}

export default Drawer2

const styles = StyleSheet.create({})