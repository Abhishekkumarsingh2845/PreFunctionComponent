// import React from 'react';
// import { Provider } from 'react-redux';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import store from './Src/profileRedux/store';
// import Comp1 from './comp1';
// import Comp2 from './comp2';

// const Stack = createNativeStackNavigator();

// const App = () => {
//   return (
//     <Provider store={store}>
//       <NavigationContainer>
//         <Stack.Navigator initialRouteName="Input">
//           <Stack.Screen name="comp1" component={Comp1} />
//           <Stack.Screen name="comp2" component={Comp2} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </Provider>
//   );
// };

// export default App;
// App.js











import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState, useEffect } from "react";

const CounterTime = () => {
  const [sec, setSec] = useState();
  const [start, end] = useState(false);
  const [sec2, setSec2] = useState();
  const [start2, end2] = useState(false);
  useEffect(() => {
    let interval;
    if (start) {
      interval = setInterval(
        () => setSec((prev) => (prev > 0 ? prev - 1 : 0)),
        1000
      );
    }
    return () => {
      clearInterval(interval);
    };
  }, [start, sec]);

  useEffect(() => {
    let interval2;
    if (start2) {
      interval2 = setInterval(
        () => setSec2((prev) => (prev > 0 ? prev - 1 : 0)),
        1000
      );
    }
    return () => {
      clearInterval(interval2);
    };
  }, [start2, sec2]);
  const handleReset = () => {
    setSec(0);
    end(false);
  };

  const handleReset2 = () => {
    setSec2(0);
    end2(false);
  };

  const handleStart = () => {
    end(!start);
  };

  const handleStart2 = () => {
    end2(!start2);
  };

  return (
    <View style={{ flex: 1, margin: 50 }}>
      <Text>Timer 1: {sec}</Text>
      <TextInput
        value={sec}
        onChangeText={setSec}
        placeholder="Enter the time for Timer 1"
        keyboardType="numeric"
        style={{ borderWidth: 1, marginBottom: 20 }}
      />
      <Button onPress={handleReset} title="Reset" />
      <Button
        onPress={handleStart}
        title={start ? "pause" : "play"}
      />


      <Text style={{ marginTop: 40 }}>Timer 2: {sec2}</Text>
      <TextInput
        value={sec2}
        onChangeText={setSec2}
        placeholder="Enter the time for Timer 2"
        keyboardType="numeric"
        style={{ borderWidth: 1, marginBottom: 20 }}
      />
      <Button onPress={handleReset2} title="Reset" />
      <Button
        onPress={handleStart2}
        title={start2 ? "Pause" : "play"}
      />
    </View>
  );
};

export default CounterTime;

const styles = StyleSheet.create({});
