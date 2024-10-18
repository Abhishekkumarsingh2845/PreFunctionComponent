import React from "react";
import { Button, View, Text } from "react-native";

const Screen2 = ({ navigation }) => {
  return (
    <View>
      <Text>Screen 2</Text>
      <Button title="Go Back to Screen 1" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default Screen2;
