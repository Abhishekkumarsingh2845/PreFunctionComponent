import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setEmail } from "./../Screen/Redux/UserSlice";
import { setPhone } from "./../Screen/Redux/UserSlice";
const Email = ({ navigation }) => {
  const [email, REmail] = useState("");
  const [phone, Rphone] = useState("");

  const dispatch = useDispatch();

  const dis = () => {
    dispatch(setEmail(email));
    dispatch(setPhone(phone));
    navigation.navigate("Summary");
  };

  return (
    <View>
      <TextInput
        placeholder="Enter your email"
        value={email}
        onChangeText={REmail}
      />
      <TextInput
        placeholder="Enter your Phone"
        value={phone}
        onChangeText={Rphone}
      />
      <TouchableOpacity onPress={dis}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Email;

const styles = StyleSheet.create({});
