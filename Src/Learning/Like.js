
import React, { useState } from "react";
import {
  View,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const ImageToggleList = () => {
 
  const [images, setImages] = useState([
    { id: "1", isFirstImage: true },
    { id: "2", isFirstImage: true },
    { id: "3", isFirstImage: true },
  ]);

  const toggleImage = (id) => {
    // Toggle the selected image based on its id
    setImages((prevImages) =>
      prevImages.map((item) =>
        item.id === id ? { ...item, isFirstImage: !item.isFirstImage } : item
      )
    );
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => toggleImage(item.id)}>
      <Image
        source={
          item.isFirstImage
            ? require("./Src/assets/heart.png")
            : require("./Src/assets/blackheart.png")
        }
        style={styles.image}
      />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    margin: 10,
  },
});

export default ImageToggleList;
