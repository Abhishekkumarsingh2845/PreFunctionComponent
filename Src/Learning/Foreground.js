
import React, { useEffect } from 'react';
import { Alert, View, Text, Button } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import notifee from '@notifee/react-native';

const App = () => {
  useEffect(() => {
    const requestPermission = async () => {
      const authStatus = await messaging().requestPermission();
      const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

      if (enabled) {
        console.log('Notification permission granted!');
      } else {
        console.log('Notification permission denied');
      }
    };

    const getToken = async () => {
      const token = await messaging().getToken();
      console.log('FCM Token:', token);
    };

    const unsubscribeForeground = messaging().onMessage(async remoteMessage => {
      console.log('Foreground notification received:', remoteMessage);
      Alert.alert('Foreground Notification', remoteMessage.notification.body);
      displayLocalNotification(remoteMessage);
    });

    const displayLocalNotification = async (remoteMessage) => {
      await notifee.displayNotification({
        title: remoteMessage.notification.title,
        body: remoteMessage.notification.body,
        android: {
          channelId: 'default',
          smallIcon: 'ic_launcher',
        },
      });
    };

    requestPermission();
    getToken();

    return () => {
      unsubscribeForeground();
    };
  }, []);

  const sendTestNotification = async () => {
    const token = await messaging().getToken();
    const message = {
      notification: {
        title: 'Test Notification',
        body: 'This is a test notification sent from the server.',
      },
      token: token,
    };
    console.log('Message sent to FCM with token:', token);
    Alert.alert('Test Notification', 'Notification sent to FCM.');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>React Native Firebase Messaging Example</Text>
      <Button title="Send Test Notification" onPress={sendTestNotification} />
    </View>
  );
};

export default App;
