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
    case "TOGGLE_SAVE_IMAGE":
      const alreadySaved = state.savedImages.includes(action.payload);
      const newSavedImages = alreadySaved
        ? state.savedImages.filter((image) => image !== action.payload)
        : [...state.savedImages, action.payload];

      AsyncStorage.setItem("savedImages", JSON.stringify(newSavedImages));

      return {
        ...state,
        savedImages: newSavedImages,
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
  };
  const saveImage = (uri) => {
    dispatch({ type: "TOGGLE_SAVE_IMAGE", payload: uri });
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
      <TouchableOpacity
        style={styles.navigateButton}
        onPress={() =>
          navigation.navigate("Favourite", { savedImages: state.savedImages })
        }
      >
        <Text style={styles.buttonText}>Go to Favourites</Text>
      </TouchableOpacity>
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
  navigateButton: {
    backgroundColor: "#28a745",
    padding: 12,
    borderRadius: 5,
    marginTop: 16,
  },
});

// import {
//   StyleSheet,
//   View,
//   Alert,
//   FlatList,
//   TouchableOpacity,
//   Text,
//   TextInput,Image
// } from "react-native";
// import React, { useReducer } from "react";
// import * as ImagePicker from "expo-image-picker";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { useNavigation } from "@react-navigation/native";

// const initialState = {
//   imageUris: [],
//   captions: [],
//   savedImages: [],
//   likes: [],
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "ADD_IMAGES":
//       return {
//         ...state,
//         imageUris: action.payload,
//         captions: new Array(action.payload.length).fill(""), // Initialize captions as empty strings
//         likes: new Array(action.payload.length).fill(false),
//       };
//     case "TOGGLE_LIKE":
//       const updatedLikes = [...state.likes];
//       updatedLikes[action.payload] = !updatedLikes[action.payload];
//       return {
//         ...state,
//         likes: updatedLikes,
//       };
//     case "TOGGLE_SAVE_IMAGE":
//       const alreadySaved = state.savedImages.includes(action.payload);
//       const newSavedImages = alreadySaved
//         ? state.savedImages.filter((image) => image !== action.payload)
//         : [...state.savedImages, action.payload];

//       AsyncStorage.setItem("savedImages", JSON.stringify(newSavedImages));

//       return {
//         ...state,
//         savedImages: newSavedImages,
//       };
//     case "SET_CAPTION":
//       const updatedCaptions = [...state.captions];
//       updatedCaptions[action.payload.index] = action.payload.caption; // Update caption at the specified index
//       return {
//         ...state,
//         captions: updatedCaptions,
//       };
//     default:
//       return state;
//   }
// };

// const Home = () => {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   const navigation = useNavigation();

//   const selectImages = async () => {
//     const permissionResult =
//       await ImagePicker.requestMediaLibraryPermissionsAsync();
//     if (permissionResult.granted === false) {
//       Alert.alert("Permission to access camera roll is required!");
//       return;
//     }

//     const result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsMultipleSelection: true,
//     });

//     if (result.canceled) {
//       return;
//     }
//     const selectedImageUris = result.assets.map((asset) => asset.uri);
//     dispatch({ type: "ADD_IMAGES", payload: selectedImageUris });
//   };

//   const saveImage = (uri) => {
//     dispatch({ type: "TOGGLE_SAVE_IMAGE", payload: uri });
//   };

//   const setCaption = (caption, index) => {
//     dispatch({ type: "SET_CAPTION", payload: { caption, index } });
//   };

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity style={styles.selectButton} onPress={selectImages}>
//         <Text style={styles.buttonText}>ADD POST</Text>
//       </TouchableOpacity>
//       <FlatList
//         showsVerticalScrollIndicator={false}
//         data={state.imageUris}
//         ItemSeparatorComponent={<View style={styles.separator} />}
//         renderItem={({ item, index }) => (
//           <View style={styles.imageCard}>
//             <Image source={{ uri: item }} style={styles.image} />
//             <TextInput
//               style={styles.captionInput}
//               placeholder="Add a caption..."
//               value={state.captions[index]} // Bind the caption input to state
//               onChangeText={(text) => setCaption(text, index)} // Update the caption on change
//             />
//             <View style={styles.buttonContainer}>
//               <TouchableOpacity
//                 onPress={() =>
//                   dispatch({ type: "TOGGLE_LIKE", payload: index })
//                 }
//               >
//                 {state.likes[index] ? (
//                   <Image
//                     source={require("./../assets/heart.png")}
//                     style={styles.heartImage}
//                   />
//                 ) : (
//                   <Image
//                     source={require("./../assets/blackheart.png")}
//                     style={styles.heartImage}
//                   />
//                 )}
//               </TouchableOpacity>
//               <TouchableOpacity
//                 style={styles.saveButton}
//                 onPress={() => saveImage(item)}
//               >
//                 <Image
//                   source={require("./../assets/save-instagram.png")}
//                   style={styles.saveIcon}
//                 />
//               </TouchableOpacity>
//             </View>
//           </View>
//         )}
//         keyExtractor={(item, index) => index.toString()}
//         numColumns={2}
//       />
//       <TouchableOpacity
//         style={styles.navigateButton}
//         onPress={() => navigation.navigate("Favourite", { savedImages: state.savedImages })}
//       >
//         <Text style={styles.buttonText}>Go to Favourites</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default Home;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     padding: 16,
//     backgroundColor: "#f7f9fc",
//   },
//   selectButton: {
//     backgroundColor: "#007BFF",
//     padding: 12,
//     borderRadius: 5,
//     marginBottom: 16,
//     elevation: 2,
//   },
//   buttonText: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "bold",
//     textAlign: "center",
//   },
//   separator: {
//     height: 20,
//   },
//   imageCard: {
//     marginTop: 10,
//     width: "48%",
//     backgroundColor: "#fff",
//     borderRadius: 10,
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 5,
//     padding: 10,
//   },
//   image: {
//     width: "100%",
//     height: 100,
//     resizeMode: "cover",
//     borderRadius: 10,
//   },
//   heartImage: {
//     width: 20,
//     height: 20,
//     marginRight: 10,
//   },
//   buttonContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginTop: 5,
//   },
//   saveButton: {
//     borderRadius: 5,
//     padding: 5,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   saveIcon: {
//     width: 20,
//     height: 20,
//   },
//   captionInput: {
//     borderColor: "#ccc",
//     borderWidth: 1,
//     borderRadius: 5,
//     padding: 8,
//     marginTop: 5,
//   },
//   navigateButton: {
//     backgroundColor: "#28a745",
//     padding: 12,
//     borderRadius: 5,
//     marginTop: 16,
//   },
// });
