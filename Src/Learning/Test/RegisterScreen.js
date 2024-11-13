import React, {useState} from 'react';
import {View, TextInput, Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RegisterScreen = ({navigation}) => {
  const [username, setUsername] = useState('');

  const handleRegister = async () => {
    if (username) {
      await AsyncStorage.setItem('username', username);
      navigation.replace('Login');
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
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
};

export default RegisterScreen;










