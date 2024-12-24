
import { View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import React from 'react';
import { Link, router } from 'expo-router';

const Index = () => {
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.content} >
      <Link href="home"></Link>

      <Image source={require('../assets/matcha.jpg')} style={styles.image} />

      <Text style={styles.title}>{'\n'}Welcome to matcApp</Text>

      <Text style={styles.quote}>
        "Just like a good cup of matcha, productivity is about balance: {'\n'}
        the right amount of focus, energy, and warmth to fuel your day."
      </Text>

      <TouchableOpacity style={styles.button} onPress={() => router.push("home")}>
      <Text style={styles.buttonText}>Get Started</Text>

      </TouchableOpacity>

    </View>
    </SafeAreaView> 
  );
};

const styles = StyleSheet.create
({
  container: { 
    flex: 1, justifyContent: 'center', 
    alignItems: 'baseline', backgroundColor: 'lightgreen'},

    content:
    {
alignItems:'center'
    },

  image: { 
    width: 150, height: 150,padding:20,alignItems:'center',justifyContent:'center',
     },

  title: { 
    fontSize: 20,fontWeight: 'bold',
     fontStyle: 'italic', marginBottom: 20 },

  quote: { 
    fontSize: 20, textAlign: 'center',
     marginBottom: 20, paddingHorizontal: 20 },

  button: { 
    backgroundColor: '#55883B', 
    padding:10, borderRadius: 8,
    alignContent:'center',width:200 },

  buttonText: { 
    color: 'white', fontSize: 19, 
    fontWeight: 'bold' ,textAlign:'center'},

});

export default Index




