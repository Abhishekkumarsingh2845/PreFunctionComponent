
import { StyleSheet, View, Button, Image, Alert, FlatList } from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Home = () => {
  const [imageUris, setImageUris] = useState([]);

  const selectImages = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (!permissionResult.granted) {
        Alert.alert("Permission to access camera roll is required!");
        return;
      }
      

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
    });

    if (result.canceled) {
      return;
    }

    const selectedImageUris = result.assets.map((asset) => asset.uri);
    setImageUris(selectedImageUris);
    await AsyncStorage.setItem("imageUris", JSON.stringify(selectedImageUris));
  };

  return (
    <View style={styles.container}>
      <Button title="Select" onPress={selectImages} />
      <FlatList
        data={imageUris}
        renderItem={({ item }) => (
          <Image source={{ uri: item }} style={styles.image} />
        )}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  image: {
    width: "45%",
    height: 100,
    margin: 5,
    borderRadius: 10,
  },
});


























///using useReducer

import { Alert, FlatList, StyleSheet, Text, View,Button,Image } from "react-native";
import React, { useReducer } from "react";
import * as ImagePicker from "expo-image-picker";

const initialState = {
  image: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADDIMAGE":
      return {
        ...state,
        image: [...state.image, ...action.payload],
      };
    default:
      return state;
  }
};

const Home = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const permission = async () => {
    const permiss = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permiss.granted) {
      Alert.alert("please allow permission");
      return;

    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
    });
    if (!result.canceled) {
      const imagesss = result.assets.map((hh) => hh.uri);
      dispatch({ type: "ADDIMAGE", payload: imagesss });
    }
  };
  return (
    <View>
      <Text>Home</Text>
      <Button title="add" onPress={permission}/>
      <FlatList
      data={state.image}
      keyExtractor={(item) => item}
      renderItem={({item}) => (
        <Image source={{uri:item}}
        style={styles.image}></Image>
  )}/>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
    image: {
             width: 100, // Adjust as needed
             height: 100, // Adjust as needed
            margin: 5,
       },
});
