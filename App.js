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





import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";

const Timer = () => {
  const [seconds, setSeconds] = useState(60);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isRunning, seconds]);

  const handleStartPause = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setSeconds(60);
    setIsRunning(false);
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>{seconds}</Text>
      <View>
        <Button
          title={isRunning ? "Pause" : "Start"}
          onPress={handleStartPause}
        />
        <Button title="Reset" onPress={handleReset} />
      </View>
    </View>
  );
};
export default Timer;
