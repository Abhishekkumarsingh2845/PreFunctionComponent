// src/screens/CheckboxScreen.js
import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { setSelectedSkills } from '../RTK/slice';

const CheckboxScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [iosDev, setIosDev] = useState(false);
  const [androidDev, setAndroidDev] = useState(false);
  const [reactNativeDev, setReactNativeDev] = useState(false);

  const handleNext = () => {
    const selectedSkills = [];
    if (iosDev) selectedSkills.push('iOS Developer');
    if (androidDev) selectedSkills.push('Android Developer');
    if (reactNativeDev) selectedSkills.push('React Native Developer');
    dispatch(setSelectedSkills(selectedSkills));
    navigation.navigate('Display');
  };

  return (
    <View style={styles.container}>
      <Text>Select Your Skills:</Text>

      {/* iOS Developer */}
      <TouchableOpacity
        style={styles.checkboxContainer}
        onPress={() => setIosDev(!iosDev)}
      >
        <View style={[styles.checkbox, iosDev && styles.checkboxSelected]} />
        <Text style={styles.checkboxLabel}>iOS Developer</Text>
      </TouchableOpacity>

      {/* Android Developer */}
      <TouchableOpacity
        style={styles.checkboxContainer}
        onPress={() => setAndroidDev(!androidDev)}
      >
        <View style={[styles.checkbox, androidDev && styles.checkboxSelected]} />
        <Text style={styles.checkboxLabel}>Android Developer</Text>
      </TouchableOpacity>

      {/* React Native Developer */}
      <TouchableOpacity
        style={styles.checkboxContainer}
        onPress={() => setReactNativeDev(!reactNativeDev)}
      >
        <View style={[styles.checkbox, reactNativeDev && styles.checkboxSelected]} />
        <Text style={styles.checkboxLabel}>React Native Developer</Text>
      </TouchableOpacity>

      {/* Next Button */}
      <Button title="Next" onPress={handleNext} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#000',
    marginRight: 8,
  },
  checkboxSelected: {
    backgroundColor: '#007BFF', // You can change the color to fit your theme
  },
  checkboxLabel: {
    fontSize: 16,
  },
});

export default CheckboxScreen;
