import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const Display = () => {
  const {age,name}=useSelector(state=>state.use)
  return (
    <View>
      <Text>welcome to app:{name}</Text>
      <Text>{age}</Text>
    </View>
  )
}

export default Display

const styles = StyleSheet.create({})