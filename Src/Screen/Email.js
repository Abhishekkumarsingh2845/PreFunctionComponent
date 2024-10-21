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
import { login } from "./../Screen/Redux/UserSlice";

const Email = ({ navigation }) => {
  const [user, setuser] = useState("");
  const dispatch = useDispatch();

  const dis = () => {
    dispatch(login(user));
    navigation.replace("Summary");
    setuser("");
  };

  return (
    <View>
      <TextInput
        style={styles.txtinp}
        placeholder="Enter your email"
        value={user}
        onChangeText={setuser}
      />

      <TouchableOpacity onPress={dis} style={styles.btn}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Email;

const styles = StyleSheet.create({
  txtinp: {
    marginVertical: 10,
    borderWidth: 1,
    textAlign: "center",
    padding: 5,
    marginHorizontal: 10,
  },
  btn: {
    backgroundColor: "yellow",
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 5,
  },
});
