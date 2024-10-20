import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

const Summary = () => {
  const { email, phone } = useSelector((state) => state.user);
  return (
    <View>
      <Text>Summary</Text>
      <Text>email:{email}</Text>
      <Text>email:{phone}</Text>
    </View>
  );
};

export default Summary;

const styles = StyleSheet.create({});
