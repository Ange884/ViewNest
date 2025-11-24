import React , {useState} from 'react';
import { View, Text, StyleSheet, TextInput, Image,TouchableOpacity } from 'react-native';
import {Ionicons} from '@expo/vector-icons';

export default function Register2Screen() {
  const [open,setOpen]=useState(false);
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
        What are you looking for exactly? Let's help you!
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
          placeholderTextColor="#3a3a3aff"
        />

        <Ionicons name='chevron-down' size={22} color='#3a3a3aff' style={styles.rightIcon} />

      </View>
      <View style={styles.inputContainer}>
        <Image 
          source={require('../assets/images/Component 7.png')} 
          style={styles.leftIcon} 
        />

        <TextInput
          style={styles.input}
          placeholder="Type of Building"
          placeholderTextColor="#3a3a3aff"
        />

        <Ionicons name='chevron-down' size={22} color='#3a3a3aff' style={styles.rightIcon} />

      </View>
      <View style={styles.inputContainer}>
        <Image 
          source={require('../assets/images/Component 8.png')} 
          style={styles.leftIcon} 
        />

        <TextInput
          style={styles.input}
          placeholder="Type of Building"
          placeholderTextColor="#3a3a3aff"
        />

        <Ionicons name='chevron-down' size={22} color='#3a3a3aff' style={styles.rightIcon} />

      </View>
      <View style={styles.inputContainer}>
        <Image 
          source={require('../assets/images/Component 9.png')} 
          style={styles.leftIcon} 
        />

        <TextInput
          style={styles.input}
          placeholder="Type of Building"
          placeholderTextColor="#3a3a3aff"
        />
        <TouchableOpacity
          style={styles.header}
          onPress={()=>setOpen(!open)}
        >
         
         <Ionicons name={open? "chevron-up" : "chevron-down"} size={22} color='#3a3a3aff' style={styles.rightIcon} />
         </TouchableOpacity>
         {open &&(
          <View style = {styles.dropdown}>
            <Text style={styles.dropdownItem}>Option 1</Text>
            <Text style={styles.dropdownItem}>Option 2</Text>
            <Text style={styles.dropdownItem}>Option 3</Text> 
            </View>
         )}
        
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
    width: 180,
    height: 140,
    marginBottom: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#333",
    textAlign: "center",
    marginBottom: 5,
     fontFamily:"poppins",
  },

  highlight: {
    color: PRIMARY_RED,
     fontFamily:"poppins",
  },

  subtitle: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginBottom: 25,
    paddingHorizontal: 10,
     fontFamily:"poppins",
  },

  inputContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#5e5d5dff",
    borderRadius: 16,
    paddingHorizontal: 12,
    height: 55,
    marginBottom: 15,
  },

  leftIcon: {
    width: 22,
    height: 22,
    marginRight: 10,
  },

  input: {
    flex: 1,
    fontSize: 15,
    fontFamily:"poppins",
  },

  rightIcon: {
    width: 16,
    height: 16,
    marginLeft: 10,
  },
   button: {
    backgroundColor:"#242424",
    paddingVertical: 12,
    borderRadius: 25,
    width: "100%",
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Poppins_600SemiBold",
  },
});
