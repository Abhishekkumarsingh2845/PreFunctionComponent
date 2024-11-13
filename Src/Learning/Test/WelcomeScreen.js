import React from 'react';
import {View, Text, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {setUserState} from './userSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const WelcomeScreen = ({navigation}) => {
  const {username, isLoggedIn} = useSelector(state => state.user);
  const dispatch = useDispatch();

  const handleLogout = async () => {
    dispatch(
      setUserState({username: '', isRegistered: false, isLoggedIn: false}),
    );

    await AsyncStorage.removeItem('username');
    await AsyncStorage.removeItem('isRegistered');
    await AsyncStorage.removeItem('isLoggedIn');
    navigation.replace('Login');
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {isLoggedIn ? (
        <>
          <Text>Welcome, {username}!</Text>
          <Button title="Logout" onPress={handleLogout} />
        </>
      ) : (
        <Text>Please log in to continue</Text>
      )}
    </View>
  );
};

export default WelcomeScreen;

















