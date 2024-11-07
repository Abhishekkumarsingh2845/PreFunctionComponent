import React from 'react';
import { View, Button } from 'react-native';
import Toast from 'react-native-toast-message';

const Toast = () => {
  const showToast = () => {
    Toast.show({
      type: 'success',
      position: 'top',
      text1: 'Hello',
      text2: 'This is a toast message!',
      visibilityTime: 3000,
    });
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Show Toast" onPress={showToast} />
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </View>
  );
};

export default Toast;
