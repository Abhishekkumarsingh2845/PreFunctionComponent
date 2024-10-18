// import {
//   Button,
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
//   Alert,
// } from "react-native";
// import React, { useState, useEffect } from "react";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// const Login = ({ navigation }) => {
//   const [email, setemail] = useState("");
//   const [stored, storedemail] = useState("");

//   const storemail = async () => {
//     if (email.trim() === "") {
//       Alert.alert("please enter a valid string");
//       return;
//     }
//     try {
//       await AsyncStorage.setItem("user_email", email);
//       console.log("=>>>>>>>>", email);
//       Alert.alert("success");
//       navigation.navigate("Home");
//     } catch (error) {
//       console.log("failed", error);
//     }
//   };

//   const retrieveemail = async () => {
//     try {
//       const emailret = await AsyncStorage.getItem(email);
//       storedemail(emailret);
//     } catch (error) {
//       console.log("failed", error);
//     }
//   };

//   useEffect(() => {
//     retrieveemail();
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Text style={{ marginBottom: 20 }}>Login</Text>
//       <TextInput
//         placeholder="enter your name"
//         value={email}
//         onChangeText={setemail}
//         style={styles.qqq}
//       />
//       <TouchableOpacity style={styles.btn} onPress={storemail}>
//         <Text style={styles.txt}>Login</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default Login;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   btn: {
//     paddingVertical: 5,
//     paddingHorizontal: 120,
//     backgroundColor: "cornflowerblue",
//     borderRadius: 5,
//     alignItems: "center",
//   },
//   txt: {
//     fontSize: 18,
//     color: "white",
//   },

//   qqq: {
//     borderWidth: 0.5,
//     alignSelf: "center",
//     paddingVertical: 5,
//     paddingHorizontal: 90,
//     borderRadius: 5,
//     marginBottom: 20,
//   },
// });

import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";
import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CommonActions } from "@react-navigation/native";
const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    const checkLoginStatus = async () => {
      const storedEmail = await AsyncStorage.getItem("user_email");
      if (storedEmail) {
        navigation.navigate("Home");
      }
    };
    checkLoginStatus();
  }, [navigation]);

  const storeEmail = async () => {
    if (email.trim() === "") {
      Alert.alert("Please enter a valid string");
      return;
    }
    try {
      await AsyncStorage.setItem("user_email", email);
      Alert.alert("Login successful");
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: "Home" }],
        })
      );
    } catch (error) {
      console.log("Failed to save email", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 20 }}>Login</Text>
      <TextInput
        placeholder="Enter your name"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TouchableOpacity style={styles.btn} onPress={storeEmail}>
        <Text style={styles.txt}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    paddingVertical: 5,
    paddingHorizontal: 120,
    backgroundColor: "cornflowerblue",
    borderRadius: 5,
    alignItems: "center",
  },
  txt: {
    fontSize: 18,
    color: "white",
  },
  input: {
    borderWidth: 0.5,
    alignSelf: "center",
    paddingVertical: 5,
    paddingHorizontal: 90,
    borderRadius: 5,
    marginBottom: 20,
  },
});
