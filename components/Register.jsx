import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity, TextInput, ActivityIndicator } from "react-native";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold
} from "@expo-google-fonts/poppins";

export default function RegisterScreen({ navigation }) {
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
    <View style={styles.innerContainer}>
      
      <Image source={require('../assets/images/people.png')} style={styles.image} />

      <Text style={styles.title}>
        Let's get you <Text style={styles.highlight}>Registered</Text>
      </Text>

      <Text style={styles.subtitle}> Kindly fill all input fields</Text>

      <TextInput style={styles.input} placeholder="Fullname" placeholderTextColor="#999" />
      <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#999" />
      <TextInput style={styles.input} placeholder="Phone" placeholderTextColor="#999" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry placeholderTextColor="#999" />

      <TouchableOpacity
        onPress={()=>navigation.navigate("confirmOTP")}
        style={styles.button}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonText} >Sign Up</Text>
      </TouchableOpacity>

      <Text style={styles.subtitle}>
        OOps! I'm a member,  
        <Text 
          onPress={() => navigation.navigate("login")} 
          style={{ color: PRIMARY_RED, fontSize: 13 }}
        >
          {" "}Login
        </Text>
      </Text>

    </View>
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
    bottom: 3,
  },
  innerContainer: {
  width: "90%",
  alignItems: "center",
  position: "absolute",
  bottom: 0, // move up/down as needed
},

  image: {
    width: 160,
    height: 160,
    resizeMode: "contain",
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
    color: "#333",
    marginBottom: 0,
    fontFamily: "Poppins_600SemiBold",
  },
  subtitle: {
    fontSize: 13,
    color: "#585454ff",
    marginBottom: 20,
    fontFamily: "Poppins_400Regular",
  },
  highlight: {
    color: PRIMARY_RED,
    fontFamily: "Poppins_700Bold",
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#b1b1b1ff",
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 15,
    marginBottom: 12,
    fontFamily: "Poppins_400Regular",
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
