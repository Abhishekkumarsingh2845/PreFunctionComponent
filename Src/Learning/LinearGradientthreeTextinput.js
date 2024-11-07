import {
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
  } from 'react-native';
  import React from 'react';
  import PrimaryBtn from '../Component/PrimaryBtn';
  import Back from '../Component/Back';
  import Header from '../Component/Header';
  import PrimaryInput from '../Component/PrimaryInput';
  import LinearGradient from 'react-native-linear-gradient';
  
  const Signup = ({navigation}) => {
    return (
      <LinearGradient colors={['#FFFFFF', '#EEEEEC']} style={styles.container}>
        <StatusBar backgroundColor={'#FFFFFF'} barStyle={'dark-content'} />
        <Back marginTop={20} />
        <Header title={'Enter Your Name'} marginTop={30} />
        <Text style={styles.completename}>Please provide your complete name</Text>
        <PrimaryInput placehld={'Full Name'} marginTop={35} />
        <View style={styles.datecontainer}>
          <TextInput
            style={styles.day}
            placeholder="day"
            placeholderTextColor={'#B2B5C4'}
          />
          <TextInput
            style={styles.month}
            placeholder="Month"
            placeholderTextColor={'#B2B5C4'}
          />
          <TextInput
            style={styles.year}
            placeholder="year"
            placeholderTextColor={'#B2B5C4'}
          />
        </View>
        <PrimaryInput placehld={'Enter Email(optional)'} />
        <View style={styles.gender}>
          <TouchableOpacity style={styles.innerc}>
            <View style={styles.outercircle}></View>
            <Text style={styles.male}>Male</Text>
          </TouchableOpacity>
          <View style={styles.genderr}>
            <TouchableOpacity style={styles.outerrcircle}>
              <View style={styles.innercircle}></View>
            </TouchableOpacity>
            <Text style={styles.female}>Female</Text>
          </View>
        </View>
        <PrimaryBtn
          press={() => navigation.navigate('Otpverifyemail')}
          marginTop={180}
          title={'Next'}
        />
      </LinearGradient>
    );
  };
  
  export default Signup;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 20,
    },
    datecontainer: {
      width: '100%',
      // backgroundColor: 'red',
      flexDirection: 'row',
      marginVertical: 15,
    },
    day: {
      backgroundColor: '#FFFFFF',
      textAlign: 'center',
      flex: 1,
      borderColor: '#E4E9F2',
      borderWidth: 0.6,
      fontSize: 14,
      color: 'red',
      borderRadius: 6,
    },
    month: {
      backgroundColor: '#FFFFFF',
      marginHorizontal: 7,
      textAlign: 'center',
      borderColor: '#E4E9F2',
      borderWidth: 0.6,
      borderRadius: 6,
      flex: 1,
    },
    year: {
      backgroundColor: '#FFFFFF',
      flex: 2,
      borderRadius: 6,
      textAlign: 'center',
      borderColor: '#E4E9F2',
      borderWidth: 0.6,
    },
    outercircle: {
      width: 20,
      height: 20,
      borderRadius: 10,
      backgroundColor: '#FFFFFF',
      justifyContent: 'center',
      borderWidth: 1.5,
      borderColor: '#C8C7CC',
      alignItems: 'center',
    },
    outerrcircle: {
      width: 20,
      height: 20,
      borderRadius: 10,
      backgroundColor: '#FFFFFF',
      justifyContent: 'center',
      borderWidth: 1.5,
      borderColor: '#FFC432',
      alignItems: 'center',
    },
    innercircle: {
      width: 12,
      height: 12,
      borderRadius: 5,
      backgroundColor: '#FFC432',
    },
    gender: {
      flexDirection: 'row',
      width: '100%',
      marginTop: 15,
    },
    genderr: {
      flexDirection: 'row',
      // width: '100%',
      marginRight: 5,
    },
    innerc: {
      flexDirection: 'row',
      // width: '100%',
      marginRight: 35,
    },
    completename: {
      marginTop: 3,
    },
    male: {
      marginLeft: 5,
    },
    female: {
      marginLeft: 5,
    },
  });
  