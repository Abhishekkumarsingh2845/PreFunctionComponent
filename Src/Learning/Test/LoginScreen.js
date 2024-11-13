import React, {useState} from 'react';
import {View, TextInput, Button, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import {setUserState} from './userSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const handleLogin = async () => {
    const storedUsername = await AsyncStorage.getItem('username');

    if (storedUsername === username) {
      dispatch(setUserState({username, isLoggedIn: true}));
      navigation.replace('Welcome');
    } else {
      setError('Username not registered');
    }
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TextInput
        placeholder="Enter username"
        value={username}
        onChangeText={setUsername}
        style={{borderWidth: 1, padding: 10, width: '80%', marginBottom: 20}}
      />
      {error ? <Text style={{color: 'red'}}>{error}</Text> : null}
      <Button title="Login" onPress={handleLogin} />

      <Button
        title="Go to Register"
        onPress={() => navigation.navigate('Register')}
      />
    </View>
  );
};

export default LoginScreen;
