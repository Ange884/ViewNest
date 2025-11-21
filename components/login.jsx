import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useFonts,
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold
} from "@expo-google-fonts/poppins";
import { ActivityIndicator} from "react-native";
export default function LoginScreen({navigation}) {
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
     
      <Image source={require('../assets/images/Vn.png')} style={styles.image} />

      <Text style={styles.Text}>Login <span style={styles.highlight}>User</span></Text>

      <TouchableOpacity
        onPress={() => navigation.navigate("login")}
        style={styles.button}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

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
  }
});