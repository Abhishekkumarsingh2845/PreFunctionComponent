// import react, { useState, useEffect } from "react";
// import { View, Text, Button, StyleSheet, Alert } from "react-native";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// const Drawer1 = ({ navigation }) => {
//   const [email, setEmail] = useState("");

//   const handleLogout = async () => {
//     try {
//       await AsyncStorage.removeItem("user_email");
//       navigation.navigate("Login");
//       Alert.alert("Logged out successfully");
//     } catch (error) {
//       console.log("Failed to log out", error);
//     }
//   };

//   const retrievname = async () => {
//     try {
//       const gotuser = await AsyncStorage.getItem("user_email");

//       setEmail(gotuser);
//     } catch (error) {
//       console.log("Failed error", error);
//     }
//   };

//   useEffect(() => {
//     retrievname();
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.welcomeText}>Hello! {email ? email : "user"}</Text>
//       <Button title="Logout" onPress={handleLogout} />
//     </View>
//   );
// };

// export default Drawer1;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   welcomeText: {
//     fontSize: 24,
//     marginBottom: 20,
//   },
// });






























import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Drawer1 = () => {
  const data = ["box1", "box2", "box3"];
  useEffect(() => {
    AsyncStorage.setItem("last", "Profile");
  }, []);

  return (
    <View style={{ marginTop: 30 }}>
      <Text style={{ textAlign: "center" }}>Boxes</Text>
      <FlatList
        data={data}
        horizontal
        style={{ marginTop: 30 }}
        renderItem={({ item }) => (
          <View style={styles.box}>
            <Text>{item}</Text>
          </View>
        )}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Drawer1;

const styles = StyleSheet.create({
  box: {
    width: 150,
    height: 150,
    backgroundColor: "#007BFF",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
    borderRadius: 8,
  },
});
