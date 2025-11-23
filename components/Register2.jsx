import React from 'react';
import { View, Text, StyleSheet, TextInput, Image } from 'react-native';

export default function Register2Screen() {
  return (
    <View style={styles.container}>
      
      <Image 
        source={require('../assets/images/Group 1.png')} 
        style={styles.image} 
      />

      <Text style={styles.title}>
        Let's Get You <Text style={styles.highlight}>Started</Text>
      </Text>

      <Text style={styles.subtitle}>
        What are you looking for exactly? Let’s help you!
      </Text>

      {/* Input with left + right icons */}
      <View style={styles.inputContainer}>
        <Image 
          source={require('../assets/images/house-building 3.png')} 
          style={styles.leftIcon} 
        />

        <TextInput
          style={styles.input}
          placeholder="Type of Building"
          placeholderTextColor="#999"
        />

        <Image
          source={require('../assets/images/Vector 11.png')}
          style={styles.rightIcon}
        />
      </View>
      <View style={styles.inputContainer}>
        <Image 
          source={require('../assets/images/component 7.png')} 
          style={styles.leftIcon} 
        />

        <TextInput
          style={styles.input}
          placeholder="Type of Building"
          placeholderTextColor="#999"
        />

        <Image
          source={require('../assets/images/Vector 11.png')}
          style={styles.rightIcon}
        />
      </View>
      <View style={styles.inputContainer}>
        <Image 
          source={require('../assets/images/component 8.png')} 
          style={styles.leftIcon} 
        />

        <TextInput
          style={styles.input}
          placeholder="Type of Building"
          placeholderTextColor="#999"
        />

        <Image
          source={require('../assets/images/Vector 11.png')}
          style={styles.rightIcon}
        />
      </View>
      <View style={styles.inputContainer}>
        <Image 
          source={require('../assets/images/component 9.png')} 
          style={styles.leftIcon} 
        />

        <TextInput
          style={styles.input}
          placeholder="Type of Building"
          placeholderTextColor="#999"
        />

        <Image
          source={require('../assets/images/Vector 11.png')}
          style={styles.rightIcon}
        />
      </View>

       <TouchableOpacity
              onPress={()=>navigation.navigate("")}
              style={styles.button}
              activeOpacity={0.8}
            >
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>

    </View>
  );
}

const PRIMARY_RED = "#E80000";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 25,
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    width: 140,
    height: 140,
    marginBottom: 20,
    resizeMode: "contain",
  },

  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#333",
    textAlign: "center",
    marginBottom: 5,
  },

  highlight: {
    color: PRIMARY_RED,
  },

  subtitle: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginBottom: 25,
    paddingHorizontal: 10,
  },

  inputContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 55,
  },

  leftIcon: {
    width: 22,
    height: 22,
    marginRight: 10,
  },

  input: {
    flex: 1,
    fontSize: 15,
  },

  rightIcon: {
    width: 16,
    height: 16,
    marginLeft: 10,
  },
});
