import { Link, router } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = () => {
  return (
    <ImageBackground
      source={require('../assets/bg.jpg')} // Replace with your image path
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.text}>matchApp</Text>

        <View style={styles.inputContainer}>
          <AntDesign name="mail" size={20} color="gray" />
          <TextInput
            placeholder="priyanshi@gmail.com"
            style={styles.input}
          />
        </View>

        <View style={styles.inputContainer}>
          <AntDesign name="lock" size={20} color="gray" />
          <TextInput
            placeholder="Password"
            style={styles.input}
            secureTextEntry={true}
          />
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("(tabs)/home")}
        >
          <Text style={styles.buttonText}>Log in</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
  flex:9,
    resizeMode: 'cover', // Ensures the image covers the screen
  },
  
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    
  },
  text: {
    color: 'black',
    fontSize: 24,
    fontStyle: 'italic',
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '65%',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 6,
    backgroundColor: 'white',
    padding: 8,
  },
  input: {
    flex: 1,
    marginLeft: 9,
  },
  button: {
    marginBottom: 100,
    backgroundColor: '#55883B',
    padding: 10,
    borderRadius: 19,
    alignContent: 'center',
    width: 100,
  },
  buttonText: {
    textAlign: 'center',
  },
});

export default Home;
