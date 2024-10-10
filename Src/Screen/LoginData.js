import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logoutt } from "../RTK/slice";

const LoginData = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.isLogged);

  const Userdata = { name: "harsh", email: "singhrnq231217@gmail.com" };
  const handleLogin = () => {
    dispatch(login(Userdata));
  };

  const handleLogout = () => {
    dispatch(logoutt());
  };

  return (
    <View style={{ paddingHorizontal: 20, marginTop: 90 }}>
      <Text>LoginData</Text>
      {user ? (
        <>
          <Text>{Userdata.name}</Text>
          <Button title="press" onPress={handleLogout} />
        </>
      ) : (
        <>
          <TextInput placeholder="enter your name" />
          <TextInput placeholder="enter your email" />
          <Button title="press" onPress={handleLogin} />
        </>
      )}
    </View>
  );
};

export default LoginData;

const styles = StyleSheet.create({});
