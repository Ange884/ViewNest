import React from 'react';
import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native';
import { useFonts,
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold
} from "@expo-google-fonts/poppins";
export default function confirmOTPScreen() {

    return (
    <View style={styles.container}>
      <Image source={require('../assets/images/landing.png')} style={styles.image} />
      <Text style={[styles.title, {fontFamily:"poppins_700Bold"}]}>Confirm OTP</Text>
    </View>
    );
}