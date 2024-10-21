import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "./Redux/UserSlice";
import Email from "./Email";

const Summary = ({ navigation }) => {
  const dispatch = useDispatch();
  const ppp = useSelector((state) => state.user.profile);
  const ll = () => {
    dispatch(logout());
    navigation.navigate("Email");
  };
  return (
    <View>
      <Text>Email:{ppp}</Text>
      <TouchableOpacity style={styles.tt} onPress={ll}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Summary;

const styles = StyleSheet.create({
  tt: {
    marginTop: 10,
    backgroundColor: "yellow",
    marginHorizontal: 10,
    padding: 5,
    borderRadius: 5,
    textAlign: "center",
  },
});
