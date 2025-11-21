import React from "react";
import { View, Image, Text, StyleSheet,TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

export default function LandingScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/landing.png')} />
      <Text style={styles.text}>ViewNest</Text>

      {/* Footer */}
      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>Created by Nziza Ange</Text>
        <TouchableOpacity onPress={() =>navigation.navigate("welcome")} style={styles.button}>
          <Text style={[styles.buttonText, { marginTop: 5 }]}>
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "relative", // allows absolute positioning of footer
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#000",
  },
  footerContainer: {
    position: "absolute",
    bottom: 20, // distance from bottom
    width: "100%",
    alignItems: "center",
  },
  footerText: {
    fontSize: 13,
    color: "#616060ff",
  },
   button: {
    marginTop: 10,
    backgroundColor: "#242424",
    paddingVertical: 10, // vertical padding
    paddingHorizontal: 25, // horizontal padding
    borderRadius: 20,
    alignItems: "center", // centers text horizontally
    justifyContent: "center", // centers text vertically
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center", // just in case
  },

});
