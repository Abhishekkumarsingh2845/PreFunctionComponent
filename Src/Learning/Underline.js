import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";

const Home = () => {
  const [select, setselected] = useState(null);
  return (
    <View
      style={{
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
      }}
    >
      <TouchableOpacity
        style={[styles.aa, select === "Home" && styles.dd]}
        onPress={() => setselected("Home")}
      >
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.aa, select === "Class" && styles.dd]}
        onPress={() => setselected("Class")}
      >
        <Text>class</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  dd: {
    borderColor: "red",
    borderBottomWidth: 2,
  },
});
