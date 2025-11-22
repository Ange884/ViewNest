import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold
} from "@expo-google-fonts/poppins";

export default function VerifyOTPScreen({ navigation }) {
  
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" style={{ flex: 1 }} />;
  }

  return (
    <View style={styles.container}>

      <Image source={require('../assets/images/Housing.png')} style={styles.image} />

      <Text style={styles.title}>Confirm <Text style={styles.highlight}>OTP</Text></Text>
      <Text style={styles.subtitle}>Enter the 6-digit code sent to your phone</Text>

      <TextInput
        style={styles.input}
        placeholder="4 5 6 - 7 8 9"
        keyboardType="numeric"
        maxLength={6}
        placeholderTextColor="#1b1b1bff"
      />

      <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={()=>navigation.navigate("Register2")}>
        <Text style={styles.buttonText}>verify OTP</Text>
      </TouchableOpacity>

      <Text style={styles.resendText}>
        Didn’t receive a code?{" "}
        <Text style={styles.resendLink}>Resend</Text>
      </Text>

    </View>
  );
}

const PRIMARY_RED = "#E80000";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: "contain",
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontFamily: "Poppins_700Bold",
    color: "#333",
    marginBottom: 5,
  },
  highlight: {
    color: PRIMARY_RED,
  },
  subtitle: {
    fontSize: 14,
    fontFamily: "Poppins_400Regular",
    color: "#666",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 55,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 25,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontFamily: "Poppins_400Regular",
    fontSize: 16,
    textAlign: "center",
  },
  button: {
    backgroundColor: PRIMARY_RED,
    paddingVertical: 14,
    borderRadius: 25,
    borderColor:"#000",
    width: "100%",
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Poppins_600SemiBold",
  },
  resendText: {
    fontFamily: "Poppins_400Regular",
    fontSize: 13,
    color: "#666",
  },
  resendLink: {
    color: PRIMARY_RED,
    fontFamily: "Poppins_600SemiBold",
  },
});
