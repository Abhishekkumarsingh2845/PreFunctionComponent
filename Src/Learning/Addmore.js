import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
  } from 'react-native';
  import React, {useState} from 'react';
  
  const App = () => {
    const [cc, ccc] = useState(false);
    const qq = () => {
      ccc(!cc);
    };
    return (
      <ScrollView>
        <View style={styles.container}>
        
          <View style={styles.subcontainer}>
            <TouchableOpacity style={styles.button} onPress={qq}>
              <Text style={styles.txt}>Send Enquiry</Text>
            </TouchableOpacity>
            {cc && (
              <ScrollView>
                <View style={styles.extend}>
                  <View style={styles.com}>
                    <Text style={styles.pleaseText}>First Name</Text>
                    <TextInput
                      style={styles.searchbar}
                      placeholder="Enter your Name"
                    />
                  </View>
                </View>
              </ScrollView>
            )}
          </View>
        </View>
      </ScrollView>
    );
  };
  
  export default App;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginTop: 50,
      paddingHorizontal: 20,
    },
    subcontainer: {
      borderWidth: 0.2,
      width: '100%',
      borderRadius: 10,
      backgroundColor: '#F4F6F9',
      padding: 10,
      marginTop: 15,
    },
    main: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 10,
    },
    img: {
      width: 120,
      height: 70,
      resizeMode: 'cover',
      marginRight: 10,
    },
    textContainer: {
      flex: 1,
      paddingHorizontal: 5,
    },
    text: {
      fontSize: 14,
      color: '#2B2B2B',
      fontWeight: '600',
      marginTop: 3,
    },
    button: {
      alignSelf: 'center',
      backgroundColor: '#ED2B3A',
      width: '100%',
      borderRadius: 20,
      paddingVertical: 10,
      marginTop: 20,
    },
    txt: {
      alignSelf: 'center',
      fontSize: 16,
      fontWeight: '500',
      color: '#FFFFFF',
    },
    pleaseText: {
      alignSelf: 'flex-start',
      marginTop: 10,
      fontSize: 14,
      color: '#555555',
      fontWeight: '500',
    },
    searchbar: {
      marginTop: 10,
      backgroundColor: '#f5fffa',
      borderRadius: 15,
      paddingHorizontal: 15,
      paddingVertical: 15,
      // width: '100%',
    },
    searchbarr: {
      marginTop: 10,
      backgroundColor: '#f5fffa',
      borderRadius: 15,
      paddingHorizontal: 15,
      paddingVertical: 35,
      // width: '100%',
    },
  
    extend: {
      marginTop: 10,
      paddingHorizontal: 2,
    },
    com: {},
  });
  