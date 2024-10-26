// App.js
import React, { useState, useEffect } from "react";
import { ActivityIndicator, View, StyleSheet, StatusBar } from "react-native";
import * as Font from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Splash from "./Src/Screen/Spalsh";
import Walkthrough from "./Src/Screen/Walkthough";
import Login from "./Src/Screen/Login";
import OtpVerify from "./Src/Screen/Otpverify";
import Home from "./Src/Screen/Home";
import SignUp2 from "./Src/Screen/SignUp2";
import OtpVerifyMail from "./Src/Screen/Otpverifymail";
import Complete from "./Src/Screen/Complete";
import Login1 from "./Src/Screen/Login1";
import Sendotp from "./Src/Screen/Sendotp";

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      "Inter-Medium": require("./Src/Assets/fonts/Inter_18pt-Medium.ttf"),
    });
    setFontsLoaded(true);
  };

  useEffect(() => {
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#007BFF" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Walkthrough" component={Walkthrough} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Otpverify" component={OtpVerify} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SignUp2" component={SignUp2} />
        <Stack.Screen name="Otpverifymail" component={OtpVerifyMail} />
        <Stack.Screen name="Complete" component={Complete} />
         <Stack.Screen name="Login1" component={Login1} />
        <Stack.Screen name="Sendotp" component={Sendotp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
