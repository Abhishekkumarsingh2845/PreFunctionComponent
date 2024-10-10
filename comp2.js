import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

const Comp2 = () => {
  const email = useSelector((state) => state.email.email); 

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24 }}>Email Address:</Text>
      <Text style={{ fontSize: 18 }}>{email || 'No email provided'}</Text>
    </View>
  );
};

export default Comp2;
