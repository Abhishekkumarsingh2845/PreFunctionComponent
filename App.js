// import React, { useState, useEffect } from "react";
// import { Button, StyleSheet, Text, TextInput, View, ScrollView } from "react-native";

// const App = () => {
//   const [timers, setTimers] = useState([]);

//   const addNewTimer = () => {
//     setTimers((prev) => [...prev, { seconds: 0, running: false }]);
//   };

//   const handleReset = (index) => {
//     setTimers((prev) =>
//       prev.map((timer, i) => (i === index ? { seconds: 0, running: false } : timer))
//     );
//   };

//   const handleStartPause = (index) => {
//     setTimers((prev) =>
//       prev.map((timer, i) => {
//         if (i === index) {
//           return { ...timer, running: !timer.running };
//         }
//         return timer;
//       })
//     );
//   };

//   // Effect for each timer
//   useEffect(() => {
//     const intervals = timers.map((timer, index) => {
//       if (timer.running && timer.seconds > 0) {
//         const interval = setInterval(() => {
//           setTimers((prev) => {
//             const updatedTimers = [...prev];
//             updatedTimers[index] = { ...updatedTimers[index], seconds: updatedTimers[index].seconds - 1 };
//             return updatedTimers;
//           });
//         }, 1000);

//         return interval; // Return interval to be cleared later
//       }
//       return null; // Return null if not running
//     });

//     return () => {
//       intervals.forEach((interval) => {
//         if (interval) clearInterval(interval); // Clear active intervals
//       });
//     };
//   }, [timers]); // Run effect when timers change

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Button title="Add Timer" onPress={addNewTimer} />
//       {timers.map((timer, index) => (
//         <View key={index} style={styles.timerContainer}>
//           <Text>Remaining Time: {timer.seconds}</Text>
//           <TextInput
//             placeholder="Enter seconds"
//             style={styles.input}
//             keyboardType="numeric"
//             onChangeText={(text) => {
//               const value = Number(text) || 0;
//               setTimers((prev) =>
//                 prev.map((t, i) => (i === index ? { ...t, seconds: value } : t))
//               );
//             }}
//             editable={timer.running === false}
//           />
//           <Button
//             title={timer.running ? "Pause" : "Start"}
//             onPress={() => handleStartPause(index)}
//           />
//           <Button title="Reset" onPress={() => handleReset(index)} />
//         </View>
//       ))}
//     </ScrollView>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     paddingVertical: 20,
//   },
//   timerContainer: {
//     marginBottom: 20,
//     alignItems: "center",
//   },
//   input: {
//     borderColor: "black",
//     borderWidth: 1,
//     width: 150,
//     textAlign: "center",
//     marginBottom: 10,
//   },
// });

// import { Button, StyleSheet, Text, TextInput, View } from "react-native";
// import React, { useState } from "react";

// const App = () => {
//   const [text, settext] = useState(" ");
//   const [display, setdisplay] = useState("");
//   const add = () => {
//     setdisplay(text);
//     settext("");
//   };
//   return (
//     <View style={styles.aa}>
//       <Text>{display}</Text>
//       <TextInput
//         value={text}
//         onChangeText={settext}
//         style={{ backgroundColor: "red", width: 200 }}
//       />
//       <Button title="press" onPress={add} />
//     </View>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   aa: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });

// import { StyleSheet, Text, View } from "react-native";
// import React, { useState, useEffect } from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import Login from "./Src/Screen/Login";
// import HomeTabs from "./Src/Screen/Home";
// import Additional from "./Src/Screen/Additional";
// import DrawerMain from "./Src/Drawer/Drawer1";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// const Stack = createStackNavigator();

// const App = () => {
//   const [inital, setinital] = useState("Login");
//   useEffect(() => {
//     const finalscreen = async () => {
//       const final = AsyncStorage.getItem("last");
//       if (final) {
//         setinital(last);
//       }
//     };
//     finalscreen();
//   }, []);

//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         screenOptions={{
//           headerShown: false,
//         }}
//       >
//         <Stack.Screen name="Login" component={Login} />
//         <Stack.Screen name="Home" component={HomeTabs} />
//         <Stack.Screen name="Drawer" component={DrawerMain} />
//         <Stack.Screen name="Additional" component={Additional}/>
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;

// const styles = StyleSheet.create({});

// import React, { useEffect, useState } from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import Screen1 from "./Src/Peristence.js/Screen1";
// import Screen2 from "./Src/Peristence.js/Screen2";

// const Stack = createStackNavigator();

// const App = () => {
//   const [initialState, setInitialState] = useState();
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const restoreState = async () => {
//       try {
//         const savedState = await AsyncStorage.getItem("navigationState");
//         console.log("Retrieved saved state:", savedState);
//         if (savedState) {
//           setInitialState(JSON.parse(savedState));
//         }
//       } catch (error) {
//         console.error("Failed to load navigation state:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     restoreState();
//   }, []);

//   const onStateChange = (state) => {
//     console.log("Current navigation state:", state);
//     AsyncStorage.setItem("navigationState", JSON.stringify(state));
//   };

//   if (isLoading) {
//     return null;
//   }

//   return (
//     <NavigationContainer
//       initialState={initialState}
//       onStateChange={onStateChange}
//     >
//       <Stack.Navigator>
//         <Stack.Screen name="Screen1" component={Screen1} />
//         <Stack.Screen name="Screen2" component={Screen2} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// import {
//   StyleSheet,
//   Text,
//   View,
//   TextInput,
//   Button,
//   FlatList,
//   TouchableOpacity,
// } from "react-native";
// import React, { useState } from "react";

// const App = () => {
//   const [text, settext] = useState("");
//   const [data, setdata] = useState([]);

//   const add = () => {
//     if (text) {
//       setdata([...data,text]);
//       settext("");
//     }
//   };

//   const remove = (index) => {
//     const uu = data.filter((_, i) => i != index);
//     setdata(uu);
//   };
//   return (
//     <View>
//       <Text>App</Text>
//       <TextInput
//         placeholder="enter your task"
//         value={text}
//         onChangeText={settext}
//       />
//       <Button title="Add" onPress={add} />
//       <FlatList
//         data={data}
//         keyExtractor={(item, index) => index.toString()}
//         renderItem={({ item, index }) => (
//           <View>
//             <Text style={{ fontSize: 12, color: "red" }}>{item}</Text>
//             <TouchableOpacity onPress={() => remove(index)}>
//               <Text style={styles.removeText}>Remove</Text>
//             </TouchableOpacity>
//           </View>
//         )}
//       />
//     </View>
//   );
// };

// export default App;

// const styles = StyleSheet.create({});































import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Email from "./Src/Screen/Email";
import Phone from "./Src/Screen/Summary";
import { Provider } from "react-redux";
import store from "./Src/Screen/Redux/Store";
import Summary from "./Src/Screen/Summary";
const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Email" component={Email} />
        <Stack.Screen name="Phone" component={Phone} />

        <Stack.Screen name="Summary" component={Summary} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
