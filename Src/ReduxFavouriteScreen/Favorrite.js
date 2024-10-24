import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../Screen/ReduxFavourite/UserSlice";

const Favorite = () => {
  const dispatch = useDispatch();
  const favoriteItems = useSelector((state) => state.favorites.items);
  const handleRemove = (item) => {
    dispatch(remove(item));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favorite Items</Text>

      <FlatList
        data={favoriteItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>{item.title}</Text>
            <TouchableOpacity
              style={styles.removeButton}
              onPress={() => handleRemove(item)}
            >
              <Text style={styles.removeButtonText}>Remove</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default Favorite;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f0f0f0",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  item: {
    backgroundColor: "#007BFF",
    padding: 10,
    marginVertical: 8,
    borderRadius: 5,
    flexDirection: "row", // Align items horizontally
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemText: {
    color: "white",
    fontSize: 18,
  },
  removeButton: {
    backgroundColor: "red",
    padding: 8,
    borderRadius: 5,
  },
  removeButtonText: {
    color: "white",
  },
  emptyMessage: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    marginTop: 20,
  },
});
