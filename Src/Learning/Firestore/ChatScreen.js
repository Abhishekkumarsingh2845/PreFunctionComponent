//his for the simple chat 
import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, FlatList } from "react-native";
import { sendMessage, fetchMessages } from "./../Utlis/Firebase";

const Message = () => {
  const [messageText, setMessageText] = useState("");
  const [messages, setMessages] = useState([]);
  const senderId = "userId1";
  const receiverId = "userId2";
  
  useEffect(() => {
    const getMessages = async () => {
      const fetchedMessages = await fetchMessages(senderId, receiverId);
      setMessages(fetchedMessages);
    };
    getMessages();
  }, []);

  const handleSendMessage = async () => {
    await sendMessage(senderId, receiverId, messageText);
    setMessageText("");
    const updatedMessages = await fetchMessages(senderId, receiverId);
    setMessages(updatedMessages);
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <FlatList
        data={messages}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={{ paddingVertical: 5 }}>
            <Text>
              {item.sender}: {item.text}
            </Text>
          </View>
        )}
      />
      <TextInput
        value={messageText}
        onChangeText={setMessageText}
        placeholder="Type a message"
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
      />
      <Button title="Send Message" onPress={handleSendMessage} />{" "}
    </View>
  );
};
export default Message;








//his code is for the real chat 


import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Button, FlatList, Platform} from 'react-native';
import {sendMessage, listenToMessages} from './Src/Utlis/Firebase';

const Message = () => {
  const [messageText, setMessageText] = useState('');
  const [messages, setMessages] = useState([]);

  const senderId = Platform.OS === 'android' ? 'userId1' : 'userId2';
  const receiverId = Platform.OS === 'android' ? 'userId2' : 'userId1';

  useEffect(() => {
    const unsubscribe = listenToMessages(newMessages => {
      setMessages(newMessages);
    });

    return () => unsubscribe();
  }, []);

  const handleSendMessage = async () => {
    if (messageText.trim() === '') return;

    await sendMessage(senderId, receiverId, messageText);
    setMessageText('');
  };

  return (
    <View style={{flex: 1, padding: 20}}>
      <FlatList
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
        data={messages}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => {
          const isSender = item.sender === senderId;

          const alignMessage =
            (Platform.OS === 'ios' && item.sender === 'userId2') ||
            (Platform.OS === 'android' && item.sender === 'userId1');

          return (
            <View
              style={{
                paddingVertical: 5,
                alignSelf: alignMessage ? 'flex-end' : 'flex-start',
                backgroundColor: alignMessage ? '#007BFF' : '#E0E0E0',
                padding: 10,
                borderRadius: 10,
                marginVertical: 5,
                maxWidth: '80%',
              }}>
              <Text
                style={{
                  color: alignMessage ? '#FFF' : '#000',
                }}>
                {item.text}
              </Text>
            </View>
          );
        }}
        inverted
      />
      <TextInput
        value={messageText}
        onChangeText={setMessageText}
        placeholder="Type a message"
        style={{
          borderBottomWidth: 1,
          marginBottom: 10,
          paddingHorizontal: 10,
        }}
      />
      <Button title="Send Message" onPress={handleSendMessage} />
    </View>
  );
};

export default Message;