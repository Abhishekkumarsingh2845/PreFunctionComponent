import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { add } from "../Screen/ReduxFavourite/UserSlice";
const data = [
  { id: 1, title: "box1" },
  { id: 2, title: "box2" },
  { id: 3, title: "box3" },
  { id: 4, title: "box4" },
  { id: 5, title: "box5" },
];

const Box = ({ navigation }) => {
  const dispatch = useDispatch();

  const favvv = (item) => {
    dispatch(add(item));
    navigation.navigate("Favorite");
  };

  return (
    <View>
      <Text>Boxes</Text>
      {data.map((item) => (
        <View
          key={item.id}
          style={{
            width: 100,
            height: 50,
            backgroundColor: "blue",
            marginVertical: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "white" }}>{item.title}</Text>
          <TouchableOpacity style={styles.aaaa} onPress={() => favvv(item)}>
            <Text style={{ color: "white" }}>Fav</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

export default Box;

const styles = StyleSheet.create({
  aaaa: {
    backgroundColor: "red",
    marginTop: 5,
    padding: 5,
    borderRadius: 3,
  },
});
