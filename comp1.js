import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { prof } from "./Src/profileRedux/slice";
import { useNavigation } from "@react-navigation/native";

const Comp1 = () => {
  const [email, setemail] = useState("");
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const handlesubmit = () => {
    dispatch(prof(email));
    navigation.navigate("comp2");
  };
  return (
    <View>
      <Text>comp1</Text>
      <TextInput placeholder="enter your name" />
      <TouchableOpacity onPress={handlesubmit}>
        <Text>submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Comp1;

const styles = StyleSheet.create({});
