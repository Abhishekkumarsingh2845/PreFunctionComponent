import React from "react";
import { Button, View, Text } from "react-native";

const Screen1 = ({ navigation }) => {
  return (
    <View>
      <Text>Screen 1</Text>
      <Button
        title="Go to Screen 2"
        onPress={() => navigation.navigate("Screen2")}
      />
    </View>
  );
};

export default Screen1;
