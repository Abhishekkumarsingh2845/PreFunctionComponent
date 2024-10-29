// // App.js
// import { StyleSheet,View,ActivityIndicator } from "react-native";
// import React, { useEffect, useState } from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import Email from "./Src/Screen/Email";
// import Summary from "./Src/Screen/Summary";
// import { Provider, useDispatch, useSelector } from "react-redux";
// import store from "./Src/Screen/Redux/Store";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { initializeAuth } from "./Src/Screen/Redux/UserSlice";

// const Stack = createStackNavigator();

// const AppNavigator = () => {
//   const dispatch = useDispatch();
//   const isAuthenticated = useSelector((state) => state.user.auth);
//   const [loading,setloading] =  useState(true);

//   useEffect(() => {
//     const checkLoginStatus = async () => {
//       const userData = await AsyncStorage.getItem('general');
//        console.log("datat",userData);
//       if (userData) {
//         const parsedData = JSON.parse(userData);
//         dispatch(initializeAuth(parsedData));
//       }
//       setloading(false);
//     };

//     checkLoginStatus();
//   }, [dispatch]);

//   if (loading) {
//     return (
//       <View style={styles.loadingContainer}>
//         <ActivityIndicator size="large" color="#0000ff" />
//       </View>
//     );
//   }

//   return (
//     <Stack.Navigator>
//       {isAuthenticated ? (
//         <Stack.Screen name="Summary" component={Summary} />
//       ) : (
//         <Stack.Screen name="Email" component={Email} />
//       )}
//     </Stack.Navigator>
//   );
// };

// const App = () => {
//   return (
//     <Provider store={store}>
//       <NavigationContainer>
//         <AppNavigator />
//       </NavigationContainer>
//     </Provider>
//   );
// };

// export default App;

// const styles = StyleSheet.create({

//   loadingContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });

///////LOGIN ,LOGOUT,REGISTER,







import { StyleSheet, Text, View } from "react-native";
import React from "react";
import store from "./Src/Screen/ReduxFavourite/store";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import FavouriteNav from "./Src/ReduxFavouriteScreen/FavouriteNav";

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <FavouriteNav />
      </NavigationContainer>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
