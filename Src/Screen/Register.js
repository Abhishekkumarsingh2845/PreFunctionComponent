import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userInfo } from "../RTK/slice";
import { useNavigation } from "@react-navigation/native";

const Register = () => {
  const [name, setname] = useState("");
  const [age, setage] = useState("");
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handle = () => {
    if (name && age) {
      dispatch(userInfo({ name, age }));
      navigation.navigate("Display");
    } else {
      alert("enter detail");
    }
  };

  return (
    <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
      <Text>Register</Text>
      <TextInput
        style={{
          backgroundColor: "whitesmoke",
          borderWidth: 1,
          marginBottom: 10,
        }}
        value={name}
        onChangeText={setname}
        placeholderTextColor="black"
      />
      <TextInput
        style={{ backgroundColor: "whitesmoke", borderWidth: 1 }}
        value={age}
        onChangeText={setage}
      />
      <TouchableOpacity
        onPress={handle}
        style={{ backgroundColor: "red", marginTop: 20 }}
      >
        <Text>PRESS ENTER</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({});
