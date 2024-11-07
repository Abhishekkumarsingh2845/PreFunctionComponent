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
