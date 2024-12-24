import { Link, router } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
import Fontisto from '@expo/vector-icons/Fontisto';




const person = () => {
  return (
    
  
      <View style={styles.container}>
        <Text style={styles.text}>Edit Profile</Text>

        <View style={styles.inputContainer}>
     <Ionicons name="person" size={24} color="black" />
      <TextInput placeholder="    New Name" style={styles.input}
      />  
      </View>

      <View style={styles.inputContainer}>
                <AntDesign name="mail" size={20} color="gray" />
                <TextInput
                  placeholder="    priyanshi@gmail.com  "
                  style={styles.input}
                />
              </View>

<View style={styles.inputContainer}>
          <AntDesign name="lock" size={20} color="gray" />
          <TextInput
            placeholder="     Password"
            style={styles.input}
            secureTextEntry={true}
          />
        </View>



        <View style={styles.inputContainer}>
          <Ionicons name="call" size={20} color="gray" />
          <TextInput
            placeholder="     Phno"
            style={styles.input}
          />
        </View>

        <View style={styles.inputContainer}>
        <AntDesign name="calendar" size={24} color="black" />
          <TextInput
            placeholder="    dd/mm/yyyy"
            style={styles.input} 
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={() => router.push("home")}>
              <Text style={styles.buttonText}>Confirm Changes</Text>
        
              </TouchableOpacity>
        
 

        
</View>
   
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
  flex:9,
    resizeMode: 'cover', // Ensures the image covers the screen
  },
  
  container: {

    
    padding: 20,
    
  },
  text: {
    color: 'black',
    fontSize: 24,
    
    marginBottom: 30,
    marginHorizontal:19,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '65%',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: 'white',
    padding: 15,
    marginHorizontal:15,
  },
  input: {
    flex: 1,
    marginLeft: 9,
  },
  button: {
    marginBottom: 10,
    backgroundColor: '#55883B',
    padding: 5,
    borderRadius: 19,
    alignContent: 'center',
    width: 150,
    marginVertical:12,
    marginHorizontal:40,
    paddingRight:20,
    paddingLeft:10,
    
  },
  buttonText: {
    textAlign: 'center',
  },
});

export default person;
