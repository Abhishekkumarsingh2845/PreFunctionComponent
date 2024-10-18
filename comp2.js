
import {
  StyleSheet,
  View,
  Button,
  Image,
  Alert,
  FlatList,
  TouchableOpacity,
  Text,
} from "react-native";
import React, { useReducer } from "react";
import * as ImagePicker from "expo-image-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const initialState = {
  imageUris: [],
  savedImages: [],
  likes: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_IMAGES":
      return {
        ...state,
        imageUris: action.payload,
        likes: new Array(action.payload.length).fill(false),
      };
    case "TOGGLE_LIKE":
      const updatedLikes = [...state.likes];
      updatedLikes[action.payload] = !updatedLikes[action.payload];
      return {
        ...state,
        likes: updatedLikes,
      };
    case "SAVE_IMAGE":
      return {
        ...state,
        savedImages: [...state.savedImages, action.payload],
      };
    default:
      return state;
  }
};

const Home = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigation = useNavigation();

  const selectImages = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      Alert.alert("Permission to access camera roll is required!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
    });

    if (result.canceled) {
      return;
    }

    const selectedImageUris = result.assets.map((asset) => asset.uri);
    dispatch({ type: "ADD_IMAGES", payload: selectedImageUris });
    await AsyncStorage.setItem("imageUris", JSON.stringify(selectedImageUris));
  };

  const saveImage = (uri) => {
    dispatch({ type: "SAVE_IMAGE", payload: uri });
    navigation.navigate("Favourite", {
      savedImages: [...state.savedImages, uri],
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.selectButton} onPress={selectImages}>
        <Text style={styles.buttonText}>ADD POST</Text>
      </TouchableOpacity>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={state.imageUris}
        ItemSeparatorComponent={<View style={styles.separator} />}
        renderItem={({ item, index }) => (
          <View style={styles.imageCard}>
            <Image source={{ uri: item }} style={styles.image} />
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                onPress={() =>
                  dispatch({ type: "TOGGLE_LIKE", payload: index })
                }
              >
                {state.likes[index] ? (
                  <Image
                    source={require("./../assets/heart.png")}
                    style={styles.heartImage}
                  />
                ) : (
                  <Image
                    source={require("./../assets/blackheart.png")}
                    style={styles.heartImage}
                  />
                )}
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.saveButton}
                onPress={() => saveImage(item)}
              >
                <Image
                  source={require("./../assets/save-instagram.png")}
                  style={styles.saveIcon}
                />
              </TouchableOpacity>
            </View>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    backgroundColor: "#f7f9fc",
  },
  selectButton: {
    backgroundColor: "#007BFF",
    padding: 12,
    borderRadius: 5,
    marginBottom: 16,
    elevation: 2,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  separator: {
    height: 20,
  },
  imageCard: {
    marginTop: 10,
    width: "48%",
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
    height: 100,
    resizeMode: "cover",
    borderRadius: 10,
  },
  heartImage: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },
  saveButton: {
    borderRadius: 5,
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  saveIcon: {
    width: 20,
    height: 20,
  },
})

















































// import { Alert, FlatList, StyleSheet, Text, View, Button, Image } from "react-native";
// import React, { useReducer } from "react";
// import * as ImagePicker from "expo-image-picker";

// const initialState = {
//   image: [],
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "ADDIMAGE":
//       return {
//         ...state,
//         image: [...state.image, ...action.payload],
//       };
//     default:
//       return state;
//   }
// };

// const Home = () => {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   const permission = async () => {
//     // Request permission for media library
//     const permiss = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
//     // If permission is not granted, alert the user
//     if (!permiss.granted) {
//       Alert.alert("Permission to access media library is required!");
//       return;
//     }

//     // Launch the image picker
//     const result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsMultipleSelection: true,
//     });

//     // If the user has selected images
//     if (!result.canceled) {
//       const images = result.assets.map((asset) => asset.uri); // Map the selected assets to their URIs
//       dispatch({ type: "ADDIMAGE", payload: images }); // Dispatch the images to the reducer
//     }
//   };

//   return (
//     <View>
//       <Text>Home</Text>
//       <Button title="Add Images" onPress={permission} />
//       <FlatList
//         data={state.image}
//         keyExtractor={(item) => item} // Use a unique key for each item
//         renderItem={({ item }) => (
//           <Image source={{ uri: item }} style={styles.image} />
//         )}
//       />
//     </View>
//   );
// };

// export default Home;

// const styles = StyleSheet.create({
//   image: {
//     width: 100, // Adjust as needed
//     height: 100, // Adjust as needed
//     margin: 5,
//   },
// });

