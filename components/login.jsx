import React from "react";
import { 
  View, 
  Image, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  TextInput, 
  ScrollView 
} from "react-native";
import { ActivityIndicator } from "react-native";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold
} from "@expo-google-fonts/poppins";

export default function LoginScreen() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "#fff" }}
      contentContainerStyle={{
        flexGrow:1,
        justifyContent:"flex-end",
        paddingHorizontal: 20,
        paddingTop: 40,
        paddingBottom:30,
        alignItems: "center",
      }}
    >
      <View style={styles.container}>
        
        <Image 
          source={require("../assets/images/sitting.png")}
          style={styles.image}
        />

        <Text style={styles.subText}>
          Welcome Back, <Text style={styles.highlight}>Ange</Text>
        </Text>

        {/* PASSWORD INPUT */}
        <View style={styles.inputWrapper}>
          <TextInput 
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor="#000"
          />
          <Image
            source={require("../assets/images/user 2.png")}
            style={styles.eyeIcon}
          />
        </View>

        {/* LOGIN BUTTON */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        {/* FINGERPRINT ICON */}
        <Image 
          source={require("../assets/images/fingerprint 1.png")}
          style={styles.fingerprint}
        />

        <Text style={styles.bottomText}>
          I'm new actually <Text style={styles.registerText}>Register</Text>
        </Text>

      </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    bottom:0,
  },

  image: {
    width: 220,
    height: 200,
    resizeMode: "contain",
    marginBottom: 20,
  },

  subText: {
    fontSize: 18,
    fontFamily: "Poppins_600SemiBold",
    marginBottom: 20,
    color: "#000",
  },

  highlight: {
    color: "#E80000",
    fontFamily: "Poppins_700Bold",
  },

  /* PASSWORD INPUT FIELD */
  inputWrapper: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#333333ff",
    borderRadius: 30,
    paddingHorizontal: 12,
    height: 55,
    marginBottom: 20,
  },

  input: {
    flex: 1,
    fontSize: 15,
    fontFamily: "Poppins_400Regular",
    color: "#000",
  },

  eyeIcon: {
    width: 24,
    height: 24,
  },

  /* LOGIN BUTTON */
  button: {
    backgroundColor: "#242424",
    width: "100%",
    paddingVertical: 14,
    alignItems: "center",
    borderRadius: 25,
    marginBottom: 25,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Poppins_600SemiBold",
  },

  fingerprint: {
    width: 50,
    height: 50,
    marginBottom: 20,
  },

  bottomText: {
    fontSize: 14,
    color: "#000",
    fontFamily: "Poppins_400Regular",
  },

  registerText: {
    color: "#E80000",
    fontFamily: "Poppins_600SemiBold",
  },
});
