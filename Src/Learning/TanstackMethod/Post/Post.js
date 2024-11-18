import React, { useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';
import Toast from 'react-native-toast-message';
import Color from '../Utlis/color';
import PrimaryBtn from '../Component/PrimaryBtn';
import PrimaryInput from '../Component/PrimaryInput';
import { useDispatch } from 'react-redux';
import { setPhn } from '../Redux/AuthRedux/userSlice';
import { useMutation } from '@tanstack/react-query';

const sendOtpApi = async (phone) => {
  const response = await axios.post(
    'http://15.206.16.230:5010/api/v1/customer/auth/loginOtpSend',
    {
      phone,
      phoneCode: '91',
    }
  );
  return response.data;
};

const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const [phone, setPhone] = useState('');
  const [showLoader, setShowLoader] = useState(false);

  const { mutate: sendOtp, isLoading, isError, error } = useMutation({
    mutationFn: sendOtpApi,
    onSuccess: (data) => {
      const { code, status, message, data: responseData } = data;
      if (code === 200 && status) {
        Toast.show({
          type: 'success',
          text1: 'OTP Sent',
          text2: 'Please check your phone for the OTP.',
        });
        navigation.navigate('Otp', { otp: responseData.otp, phone });
        dispatch(setPhn(phone));
        console.log('OTP:', responseData.otp);
      } else {
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: message || 'Something went wrong, please try again.',
        });
      }
      setShowLoader(false);
    },
    onError: (error) => {
      console.error('API Error:', error);
      Toast.show({
        type: 'error',
        text1: 'API Error',
        text2: 'Failed to send OTP. Please try again later.',
      });
      setShowLoader(false);
    },
  });

  const handleSendOtp = () => {
    if (phone.length !== 10) {
      Toast.show({
        type: 'error',
        text1: 'Invalid Phone Number',
        text2: 'Please enter a valid 10-digit phone number.',
        position: 'top',
      });
      return;
    }

    setShowLoader(true);

    setTimeout(() => {
      sendOtp(phone);
    }, 5000);
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#F4F4F3'} barStyle={'dark-content'} />
      <View style={{ marginTop: 180 }}>
        <Text style={styles.maintxt}>Hi, Welcome to Taxi App</Text>
      </View>

      <Text style={styles.subtxt}>Enter your Mobile Number to login.</Text>

      <PrimaryInput
        marginTop={30}
        placehld={'Mobile Number'}
        value={phone}
        keyboardType="numeric"
        maxLength={10}
        onChangeText={setPhone}
      />

      <PrimaryBtn marginTop={30} title={'Login'} press={handleSendOtp} />

      {showLoader && (
        <ActivityIndicator
          size="large"
          color={Color.primary}
          style={styles.loader}
        />
      )}

      {isError && (
        <Text style={styles.errorText}>
          Error: {error?.message || 'Something went wrong!'}
        </Text>
      )}

      <TouchableOpacity>
        <Text style={styles.clickingstr}>
          By clicking start, you agree to our
        </Text>
        <Text style={styles.termscondition}>Terms and Conditions</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.account}>
          Don’t have an account?<Text style={styles.signup}> Sign Up</Text>
        </Text>
      </TouchableOpacity>

      <Toast ref={(ref) => Toast.setRef(ref)} />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.backgroundclr,
    paddingHorizontal: 20,
  },
  maintxt: {
    fontSize: 22,
    fontWeight: '700',
    fontFamily: 'Inter_18pt-Medium',
    color: Color.black,
    textAlign: 'center',
    letterSpacing: 0.3,
  },
  subtxt: {
    marginTop: 10,
    fontFamily: 'Inter_18pt-Medium',
    fontSize: 14,
    fontWeight: '400',
    color: Color.grey,
    textAlign: 'center',
  },
  clickingstr: {
    marginTop: 40,
    fontSize: 13,
    fontWeight: '400',
    fontFamily: 'Inter_18pt-Medium',
    color: Color.grey,
    textAlign: 'center',
  },
  termscondition: {
    fontSize: 13,
    fontWeight: '600',
    fontFamily: 'Inter_18pt-Medium',
    color: Color.black,
    textAlign: 'center',
  },
  account: {
    marginTop: 'auto',
    fontSize: 13,
    fontWeight: '400',
    fontFamily: 'Inter_18pt-Medium',
    color: Color.grey,
    textAlign: 'center',
    paddingBottom: 20,
  },
  signup: {
    fontSize: 13,
    fontWeight: '400',
    fontFamily: 'Inter_18pt-Medium',
    color: Color.black,
    textAlign: 'center',
  },
  loader: {
    marginTop: 20,
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 10,
  },
});