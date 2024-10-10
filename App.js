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
  const [sec, setsec] = useState(60);
  const [start, end] = useState(false);
  useEffect(() => {
    let interval;
    if (start) {
      interval = setInterval(() => setsec((prev) => prev>0?prev-1:0), 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [start, sec]);

  const handlereset = () => {
    setsec(60);
    end(false);
  };

  const handleStart = () => {
    end(!start);
  };
  return (
    <View style={{ flex: 1,margin:50}}>
      <Text>{sec}</Text>
      <TextInput placeholder="Enter the time" style={{width:1,borderColor:"black",borderRadius:1}}/>
      <Button onPress={handlereset} title="reset" />
      <Button onPress={handleStart} title={start? "end":"start"} />
    </View>
  );
};

export default CounterTime;

const styles = StyleSheet.create({});




