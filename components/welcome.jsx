import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function WelcomeScreen({navigation}) {
  return (
    <View style={styles.container}>
        <View style={styles.footerContainer}>
     
      <Image source={require('../assets/images/Vn.png')} style={styles.image} />

      <Text style={styles.Text}>Welcome <span style={styles.highlight}>User</span></Text>

      <TouchableOpacity
        onPress={() => navigation.navigate("login")}
        style={styles.button}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("welcome")}
          style={styles.buttonBottom}
          activeOpacity={0.8}
         >
         <Text style={styles.buttonTextBottom}>Sign Up</Text>
        </TouchableOpacity>



      {/* Footer */}
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
    marginBottom: 30,
    letterSpacing: 1,
  },
  button: {
    backgroundColor: "#242424",
    paddingVertical: 10,
    paddingHorizontal: 40,
    width:350,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, // Android shadow
    marginBottom: 7,
  },
 buttonBottom: {
  backgroundColor: "#fff",       // white fill
  borderWidth: 1,                // visible border
  borderColor: "#ff8989ff",        // red border
  paddingVertical: 10,
  paddingHorizontal: 40,
  width: 350,
  borderRadius: 25,
  alignItems: "center",
  justifyContent: "center",
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 3 },
  shadowOpacity: 0.1,            // subtle shadow
  shadowRadius: 4,
  elevation: 3,
  marginBottom: 15,
},
buttonTextBottom: {
  color: "#E80000",              // red text matching border
  fontSize: 16,
   fontFamily:"Poppins_400Regular"
},

highlight:{
    color:"#E80000",
     fontFamily:"Poppins_400Regular"
},

  buttonText: {
    color: "#fff",
    fontSize: 16,
     fontFamily:"Poppins_400Regular"
  },
  footerContainer: {
    position: "absolute",
    bottom: 15,
    width: "100%",
    alignItems: "center",
  },
  footerText: {
    fontSize: 13,
    color: "#8e8e8e",
  },
});
