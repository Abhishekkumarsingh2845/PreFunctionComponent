import { StyleSheet, Text, View } from 'react-native'
import React,{useEffect} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Screen3 = () => {
    useEffect(() => {
        AsyncStorage.setItem("last", "Screen3");
      }, []);
  return (
    <View>
      <Text>Screen3</Text>
     
    </View>
  )
}

export default Screen3

const styles = StyleSheet.create({})