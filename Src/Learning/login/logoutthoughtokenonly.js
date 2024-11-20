import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Screen/Home';
import Splash from '../Screen/Splash';
import Walkthough from '../Screen/Walkthough';
import Login from '../Screen/Login';
import Otp from '../Screen/Otp';
import Otpverifyemail from '../Screen/Otpverifyemail';
import Complete from '../Screen/Complete';
import Signup from '../Screen/Signup';
import {useDispatch, useSelector} from 'react-redux';
import {setToken} from '../Redux/AuthRedux/userSlice';
import BottomTab from './BottomTab';
import Register from '../Screen/Register';
import OtpVerify from '../Screen/OtpVerify';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadToken = async () => {
      const storedToken = await AsyncStorage.getItem('TOKENN');
      if (storedToken) {
        dispatch(setToken(storedToken));
      }
      setLoading(false);
    };
    loadToken();
  }, [dispatch]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="red" />
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {!token ? (
          <>
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="Walkthough" component={Walkthough} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Otp" component={Otp} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="OtpVerify" component={OtpVerify} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="Otpverifyemail" component={Otpverifyemail} />
            <Stack.Screen name="Complete" component={Complete} />
          </>
        ) : (
          <>
            <Stack.Screen name="BottomTab" component={BottomTab} />
          </>
        )}
      </Stack.Navigator>
    </SafeAreaProvider>
  );
};

export default AuthNavigator;

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

