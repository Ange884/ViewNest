import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useFonts,
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold
} from "@expo-google-fonts/poppins";
import { ActivityIndicator} from "react-native";

export default function LandingScreen({ navigation }) {
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
      <Image source={require('../assets/images/landing.png')} style={styles.image} />

      <Text style={[styles.title, {fontFamily:"poppins_700Bold"}]}>ViewNest</Text>

      <TouchableOpacity
        onPress={() => navigation.navigate("welcome")}
        style={styles.button}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>

      {/* Footer */}
      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>Created by Nziza Ange</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    position: "relative",
  },
  image: {
    resizeMode: "contain",
    marginBottom: 2,
  },
  title: {
    fontSize: 32,
    color: "#242424",
    marginBottom: 30,
    letterSpacing: 1,
    fontFamily: "Poppins_700Bold",
  },
  button: {
    backgroundColor: "#242424",
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "Poppins_600SemiBold",
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
    fontFamily: "Poppins_400Regular",
  },
});
