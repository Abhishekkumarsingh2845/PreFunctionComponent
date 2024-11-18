import React, { useRef } from 'react';
import { TextInput, Button, View } from 'react-native';

const FocusInput = () => {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <View style={{ marginTop: 60 }}>
      <TextInput
        ref={inputRef}
        placeholder="Enter text"
        style={{ borderBottomWidth: 1, marginBottom: 20 }}
      />
      <Button title="Focus Input" onPress={focusInput} />
    </View>
  );
};

export default FocusInput;
