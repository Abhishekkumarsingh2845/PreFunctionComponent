import React from "react";
import {
  View,
  FlatList,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Favourite = ({ route }) => {
  const navigation = useNavigation();
  const { savedImages, savedCaptions } = route.params;

  const renderItem = ({ item, index }) => (
    <View style={styles.imageCard}>
      <Image source={{ uri: item }} style={styles.image} />
      <Text style={styles.caption}>{savedCaptions[index]}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={savedImages}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.listContainer}
      />
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Favourite;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f7f9fc",
  },
  listContainer: {
    paddingBottom: 20,
  },
  imageCard: {
    marginBottom: 16,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    padding: 10,
  },
  image: {
    width: "100%",
    height: 150,
    resizeMode: "cover",
    borderRadius: 10,
  },
  caption: {
    marginTop: 5,
    fontSize: 14,
    color: "#333",
  },
  backButton: {
    backgroundColor: "#007BFF",
    padding: 12,
    borderRadius: 5,
    marginTop: 16,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
