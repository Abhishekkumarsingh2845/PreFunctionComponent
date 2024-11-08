

import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';

const Destination = () => {
  const [select, setselect] = useState([
    {
      id: Date.now(),
    },
  ]);

  const addmore = () => {
    setselect([...select, {id: Date.now()}]);
  };
  return (
    <View style={styles.contiainer}>
      {select.map(box => (
        <View
          style={{
            flexDirection: 'row',
            borderWidth: 1,
            width: '50%',
            height: 30,
          }}>
          <Text>Destination</Text>
          <TouchableOpacity onPress={addmore}>
            <Image
              source={require('./../Assets/Images/addmore.png')}
              style={styles.ll}
            />
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

export default Destination;

const styles = StyleSheet.create({
  contiainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  ll: {
    width: 30,
    height: 30,
  },
});
