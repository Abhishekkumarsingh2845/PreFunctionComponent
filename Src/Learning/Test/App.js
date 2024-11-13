import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { store } from './Test/store';
import RegisterScreen from './Test/RegisterScreen';
import LoginScreen from './Test/LoginScreen';
import WelcomeScreen from './Test/WelcomeScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

const App = () => {
  const [isFirstTime, setIsFirstTime] = useState(null);

  useEffect(() => {
    const checkIfFirstTime = async () => {
      const isRegistered = await AsyncStorage.getItem('isRegistered');
      setIsFirstTime(isRegistered !== 'true');
    };

    checkIfFirstTime();
  }, []);

  if (isFirstTime === null) {
    return null;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={isFirstTime ? 'Register' : 'Login'}>
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;