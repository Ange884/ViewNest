import React from 'react';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';

export default function NavigationBar() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold
  });

  if (!fontsLoaded) return null;

  return (
    <View style={styles.navbar}>
      
      <TouchableOpacity style={styles.navItemContainer}>
        <Image source={require('../assets/images/home.png')} style={styles.icon} />
        <Text style={styles.navItem}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navItemContainer}>
        <Image source={require('../assets/images/exclaim.png')} style={styles.icon} />
        <Text style={styles.navItem}>Alerts</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navItemContainer}>
        <Image source={require('../assets/images/hands.png')} style={styles.icon} />
        <Text style={styles.navItem}>Support</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navItemContainer}>
        <Image source={require('../assets/images/duo.png')} style={styles.icon} />
        <Text style={styles.navItem}>Chat</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navItemContainer}>
        <Image source={require('../assets/images/settings.png')} style={styles.icon} />
        <Text style={styles.navItem}>Settings</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  navItemContainer: {
    alignItems: 'center',
  },
  icon: {
    width: 26,
    height: 26,
    marginBottom: 2,
  },
  navItem: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 12,
    color: '#333',
  },
});
