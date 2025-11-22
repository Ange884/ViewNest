import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { useFonts,
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold
} from "@expo-google-fonts/poppins";
import { ActivityIndicator} from "react-native";
export default function RegisterScreen({navigation}) {
    const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" style={{ flex: 1 }} />;
  }
  return (
    <View style={styles.container}>
        <View style={styles.footerContainer}>
     
      <Image source={require('../assets/images/people.png')} style={styles.image} />

      <Text style={styles.Text}>Let's get you <span style={styles.highlight}>Registered</span></Text>

      <TextInput style={styles.TextInput} placeholder="Username" />
      <TextInput style={styles.TextInput} placeholder="Email" />
      <TextInput style={styles.TextInput} placeholder="Password" secureTextEntry={true} />

      <TouchableOpacity
        onPress={() => navigation.navigate("login")}
          style={styles.buttonBottom}
          activeOpacity={0.8}
         >
         <Text style={styles.buttonTextBottom}>Sign Up</Text>
        </TouchableOpacity>
</View>
</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9", // soft background
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    position: "relative",
  },
  Text:{
       color:"#555",
       fontSize:16,
       marginBottom:20,
       fontFamily:"Poppins_400Regular",

  },
  image: {
    resizeMode: "contain",
    marginBottom: 2,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "#242424",
  },
  highlight: {
    color: "#E80000",
    fontWeight: "600",
  },
  button: {
    backgroundColor: "#4A90E2",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginBottom: 15,
    width: '90%',
    alignItems: 'center',
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Poppins_600SemiBold",
  },
  buttonBottom: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#4A90E2",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    width: '90%',
    alignItems: 'center',
  },
  buttonTextBottom: {
    color: "#4A90E2",
    fontSize: 16,
    fontFamily: "Poppins_600SemiBold",
  },
  TextInput: {
    width: '90%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontFamily: "Poppins_400Regular",
  },
  footerContainer: {
    position: "absolute",
    bottom: 15,
    width: "100%",
    alignItems: "center",
  },
});