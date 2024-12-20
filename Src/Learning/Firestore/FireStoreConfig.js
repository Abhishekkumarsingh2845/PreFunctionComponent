

// his code is for the simple one way message 
import firestore from "@react-native-firebase/firestore";
export const sendMessage = async (senderId, receiverId, messageText) => {
  if (messageText.trim() === "") return;
  const message = {
    sender: senderId,
    receiver: receiverId,
    text: messageText,
    timestamp: firestore.FieldValue.serverTimestamp(),
  };
  await firestore().collection("messages").add(message);
};

export const fetchMessages = async (senderId, receiverId) => {
  const snapshot = await firestore()
    .collection("messages")
    .where("sender", "in", [senderId, receiverId])
    .where("receiver", "in", [senderId, receiverId])
    .orderBy("timestamp", "asc")
    .get();
  const messages = [];
  snapshot.forEach((doc) => {
    messages.push(doc.data());
  });
  return messages;
};















//his code is for the real chat 
import firestore from '@react-native-firebase/firestore';

export const sendMessage = async (senderId, receiverId, text) => {
  try {
    await firestore().collection('chats').add({
      sender: senderId,
      receiver: receiverId,
      text,
      createdAt: firestore.FieldValue.serverTimestamp(),
    });
  } catch (error) {
    console.error('Error sending message:', error);
  }
};

export const listenToMessages = (callback) => {
  return firestore()
    .collection('chats')
    .orderBy('createdAt', 'asc')
    .onSnapshot((querySnapshot) => {
      const messages = querySnapshot.docs.map((doc) => doc.data());
      callback(messages);
    });
};








