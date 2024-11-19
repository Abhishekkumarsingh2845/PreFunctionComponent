import {
    ActivityIndicator,
    Platform,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
  } from 'react-native';
  import React, { useState } from 'react';
  import PrimaryBtn from '../Component/PrimaryBtn';
  import Back from '../Component/Back';
  import Header from '../Component/Header';
  import PrimaryInput from '../Component/PrimaryInput';
  import { SafeAreaView } from 'react-native-safe-area-context';
  import axios from 'axios';
  import AsyncStorage from '@react-native-async-storage/async-storage';
  import { useDispatch, useSelector } from 'react-redux';
  import { setToken } from '../Redux/AuthRedux/userSlice';
  import Color from '../Utlis/color';
  import { postData } from '../Api/Api';
  import Toast from 'react-native-toast-message';
  
  const Signup = ({ navigation }) => {
    const finalphone = useSelector((state) => state.auth.phoneNumber);
    const dispatch = useDispatch();
  
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [gender, setGender] = useState('');
  
    const validateInputs = () => {
      if (!name.trim()) {
        Toast.show({
          type: 'info',
          text1: 'Please enter your full name',
          position: 'top',
        });
        return false;
      }
      if (!day.trim() || isNaN(day) || day < 1 || day > 31) {
        Toast.show({
          type: 'info',
          text1: 'Please enter a valid day',
          position: 'top',
        });
        return false;
      }
      if (!month.trim() || isNaN(month) || month < 1 || month > 12) {
        Toast.show({
          type: 'info',
          text1: 'Please enter a valid month',
          position: 'top',
        });
        return false;
      }
      if (!year.trim() || isNaN(year) || year.length !== 4 || year < 1900 || year > new Date().getFullYear()) {
        Toast.show({
          type: 'info',
          text1: 'Please enter a valid year',
          position: 'top',
        });
        return false;
      }
      if (email.trim() && !/\S+@\S+\.\S+/.test(email)) {
        Toast.show({
          type: 'info',
          text1: 'Please enter a valid email address',
          position: 'top',
        });
        return false;
      }
      return true;
    };
  
    const rg = async () => {
      if (!validateInputs()) return;
  
      setLoading(true);
      try {
        const payload = {
          fullName: name,
          phone: finalphone,
          email: email,
          phoneCode: '91',
          profileImage: 'http://example.com/path/to/profile.jpg',
          gender: gender || 'MALE',
          dob: {
            day: day.toString(),
            month: month.toString(),
            year: year.toString(),
          },
          userType: 'CUSTOMER',
        };
  
        const response = await postData('/signUp', payload);
        console.log('Payload:', payload);
        console.log('Response:', response);
  
        const { code, status, message, data } = response;
  
        if (code === 200 && status) {
          console.log('API Success, Token:', data.token);
          await AsyncStorage.setItem('TOKENN', data.token);
          dispatch(setToken(data.token));
          navigation.navigate('Otpverifyemail', { email: data.token });
        } else {
          console.log('Error:', message);
          Toast.show({
            type: 'error',
            text1: message,
            position: 'top',
          });
        }
      } catch (error) {
        console.log('Error during API call:', error.message);
        Toast.show({
          type: 'error',
          text1: 'Something went wrong. Please try again later.',
          position: 'top',
        });
      } finally {
        setLoading(false);
      }
    };
  
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <StatusBar backgroundColor={'#F4F4F3'} barStyle={'dark-content'} />
          <Back />
          <Header title={'Enter Your Name'} marginTop={30} />
          <Text style={styles.completename}>Please provide your complete name</Text>
  
          <PrimaryInput
            placehld={'Full Name'}
            value={name}
            onChangeText={setName}
            marginTop={35}
          />
  
          <View style={styles.datecontainer}>
            <TextInput
              value={day}
              onChangeText={setDay}
              style={styles.day}
              maxLength={2}
              placeholder="Day"
              placeholderTextColor={'#B2B5C4'}
            />
            <TextInput
              style={styles.month}
              value={month}
              maxLength={2}
              onChangeText={setMonth}
              placeholder="Month"
              placeholderTextColor={'#B2B5C4'}
            />
            <TextInput
              style={styles.year}
              value={year}
              onChangeText={setYear}
              maxLength={4}
              placeholder="Year"
              placeholderTextColor={'#B2B5C4'}
            />
          </View>
  
          <PrimaryInput
            placehld={'Enter Email (Optional)'}
            value={email}
            onChangeText={setEmail}
          />
          {loading && (
            <ActivityIndicator
              size="large"
              color={Color.primary}
              style={styles.loader}
            />
          )}
          <Text
            style={{
              fontSize: 14,
              fontWeight: '500',
              color: '#222E50',
              marginTop: 20,
            }}>
            Gender
          </Text>
          <View style={styles.gender}>
            <TouchableOpacity
              style={styles.innerc}
              onPress={() => setGender('MALE')}>
              <View
                style={[
                  styles.outercircle,
                  gender === 'MALE' && { borderColor: '#FFC432' },
                ]}
              />
              <Text style={styles.male}>Male</Text>
            </TouchableOpacity>
  
            <TouchableOpacity
              style={styles.outerrcircle}
              onPress={() => setGender('FEMALE')}>
              <View
                style={[
                  styles.innercircle,
                  gender === 'FEMALE' && { backgroundColor: '#FFC432' },
                ]}
              />
            </TouchableOpacity>
            <Text style={styles.female}>Female</Text>
          </View>
  
          <PrimaryBtn press={rg} marginTop={180} title={'Next'} />
          <Toast ref={(ref) => Toast.setRef(ref)} />
        </View>
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 20,
    },
    datecontainer: {
      width: '100%',
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
      borderRadius: 6,
      ...Platform.select({
        ios: {
          paddingVertical: 11,
        },
      }),
    },
    month: {
      backgroundColor: '#FFFFFF',
      marginHorizontal: 7,
      textAlign: 'center',
      borderColor: '#E4E9F2',
      borderWidth: 0.6,
      borderRadius: 6,
      flex: 1,
      paddingVertical: 8,
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
      marginTop: 25,
    },
    male: {
      marginLeft: 5,
    },
    female: {
      marginLeft: 5,
    },
    innerc: {
      flexDirection: 'row',
      marginRight: 35,
    },
    completename: {
      marginTop: 3,
    },
    loader: {
      marginTop: 20,
    },
  });
  
  export default Signup;
  