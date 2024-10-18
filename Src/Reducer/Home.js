// import {
//   StyleSheet,
//   View,
//   Button,
//   Image,
//   Alert,
//   FlatList,
//   TouchableOpacity,
// } from "react-native";
// import React, { useState } from "react";
// import * as ImagePicker from "expo-image-picker";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// const Home = () => {
//   const [imageUris, setImageUris] = useState([]);
//   const [likes, setLikes] = useState([]);
//   const toggleLike = (index) => {
//     const updatedLikes = [...likes];
//     updatedLikes[index] = !updatedLikes[index];
//     setLikes(updatedLikes);
//   };

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
//     setImageUris(selectedImageUris);
//     setLikes(new Array(selectedImageUris.length).fill(false));
//     await AsyncStorage.setItem("imageUris", JSON.stringify(selectedImageUris));
//   };

//   return (
//     <View style={styles.container}>
//       <Button title="Select" onPress={selectImages} />
//       <FlatList
//         showsVerticalScrollIndicator={false}
//         data={imageUris}
//         ItemSeparatorComponent={<View style={{ height: 20 }}></View>}
//         renderItem={({ item, index }) => (
//           <View style={styles.aa}>
//             <Image source={{ uri: item }} style={styles.image} />
//             <View style={{ flexDirection: "row" }}>
//               <TouchableOpacity onPress={() => toggleLike(index)}>
//                 {likes[index] ? (
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
//               <TouchableOpacity style={{}}>
//                 <Image
//                   source={require("./../assets/save-instagram.png")}
//                   style={{ width: 15, height: 15, resizeMode: "contain" }}
//                 />
//               </TouchableOpacity>
//             </View>
//           </View>
//         )}
//         keyExtractor={(item, index) => index.toString()}
//         numColumns={2}
//       />
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
//   },
//   title: {
//     fontSize: 24,
//     marginBottom: 16,
//   },
//   image: {
//     width: "100%",
//     height: 70,
//     margin: 5,
//     resizeMode: "contain",
//     borderRadius: 40,
//   },
//   heartImage: {
//     width: 15,
//     height: 15,
//   },
//   aa: {
//     marginTop: 20,
//     width: 100,
//     height: 100,
//     backgroundColor: "aliceblue",
//     marginLeft: 12,
//     borderRadius: 10,
//   },
// });

// import {
//   StyleSheet,
//   View,
//   Alert,
//   FlatList,
//   TouchableOpacity,
//   Text,
//   TextInput,
//   Image,
// } from "react-native";
// import React, { useReducer } from "react";
// import * as ImagePicker from "expo-image-picker";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { useNavigation } from "@react-navigation/native";

// const initialState = {
//   imageUris: [],
//   captions: [],
//   savedImages: [],
//   savedCaptions: [],
//   likes: [],
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "ADD_IMAGES":
//       return {
//         ...state,
//         imageUris: action.payload,
//         captions: new Array(action.payload.length).fill(""),
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
//       const alreadySaved = state.savedImages.includes(action.payload.uri);
//       const newSavedImages = alreadySaved
//         ? state.savedImages.filter((image) => image !== action.payload.uri)
//         : [...state.savedImages, action.payload.uri];
//       const newSavedCaptions = alreadySaved
//         ? state.savedCaptions.filter(
//             (caption) => caption !== action.payload.caption
//           )
//         : [...state.savedCaptions, action.payload.caption];

//       AsyncStorage.setItem("savedImages", JSON.stringify(newSavedImages));
//       AsyncStorage.setItem("savedCaptions", JSON.stringify(newSavedCaptions));

//       return {
//         ...state,
//         savedImages: newSavedImages,
//         savedCaptions: newSavedCaptions,
//       };
//     case "SET_CAPTION":
//       const updatedCaptions = [...state.captions];
//       updatedCaptions[action.payload.index] = action.payload.caption;
//       return {
//         ...state,
//         captions: updatedCaptions,
//       };
//     case "EDIT_IMAGE":
//       const editedImages = [...state.imageUris];
//       editedImages[action.payload.index] = action.payload.newImageUri;
//       return {
//         ...state,
//         imageUris: editedImages,
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

//   const saveImage = (uri, caption) => {
//     dispatch({ type: "TOGGLE_SAVE_IMAGE", payload: { uri, caption } });
//   };

//   const setCaption = (caption, index) => {
//     dispatch({ type: "SET_CAPTION", payload: { caption, index } });
//   };

//   const editImage = async (index) => {
//     const permissionResult =
//       await ImagePicker.requestMediaLibraryPermissionsAsync();
//     if (permissionResult.granted === false) {
//       Alert.alert("Permission to access camera roll is required!");
//       return;
//     }

//     const result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//     });

//     if (result.canceled) {
//       return;
//     }

//     dispatch({
//       type: "EDIT_IMAGE",
//       payload: { index, newImageUri: result.assets[0].uri },
//     });
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
//               value={state.captions[index]}
//               onChangeText={(text) => setCaption(text, index)}
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
//                 onPress={() => saveImage(item, state.captions[index])}
//               >
//                 <Image
//                   source={require("./../assets/save-instagram.png")}
//                   style={styles.saveIcon}
//                 />
//               </TouchableOpacity>
//               <TouchableOpacity
//                 style={styles.editButton}
//                 onPress={() => editImage(index)}
//               >
//                 <Text style={styles.editText}>Edit</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         )}
//         keyExtractor={(item, index) => index.toString()}
//         numColumns={2}
//       />
//       <TouchableOpacity
//         style={styles.navigateButton}
//         onPress={() =>
//           navigation.navigate("Favourite", {
//             savedImages: state.savedImages,
//             savedCaptions: state.savedCaptions,
//           })
//         }
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
//   editButton: {
//     padding: 5,
//     alignItems: "center",
//     justifyContent: "center",
//     marginLeft: 10,
//   },
//   editText: {
//     color: "#007BFF",
//     fontWeight: "bold",
//   },
// });






















import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
} from "react-native";
import React, { useReducer } from "react";
import * as ImagePicker from "expo-image-picker";

const initialState = {
  image: [],
  like: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADDIMAGE":
      return {
        ...state,
        image: [...state.image, ...action.payload],
      };
    default:
      return state;
  }
};

const Home = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const permission = async () => {
    const permiss = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permiss.granted) {
      Alert.alert("please allow permission");
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
    });
    if (!result.canceled) {
      const imagesss = result.assets.map((hh) => hh.uri);
      dispatch({ type: "ADDIMAGE", payload: imagesss });
    }
  };
  return (
    <View>
      <Text>Home</Text>
      <Button title="add" onPress={permission} />
      <FlatList
        data={state.image}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Image source={{ uri: item }} style={styles.image}></Image>
        )}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    margin: 5,
  },
});
