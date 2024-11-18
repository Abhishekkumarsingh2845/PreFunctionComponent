import {StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Splash from './../Screen/Splash';
import Walkthough from './../Screen/Walkthough';
import Login from './../Screen/Login';
import Otp from './../Screen/Otp';
import Register from './../Screen/Register';
import OtpVerify from './../Screen/OtpVerify';
import Signup from './../Screen/Signup';
import Otpverifyemail from './../Screen/Otpverifyemail';
import Complete from './../Screen/Complete';
import BottomTab from './BottomTab';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {setToken} from '../Redux/AuthRedux/userSlice';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);

  useEffect(() => {
    const loadToken = async () => {
      const storedToken = await AsyncStorage.getItem('TOKENN');
      if (storedToken) {
        dispatch(setToken(storedToken));
      }
    };
    loadToken();
  }, [dispatch]);

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
            <Stack.Screen name="Lgin" component={Login} />
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

const styles = StyleSheet.create({});