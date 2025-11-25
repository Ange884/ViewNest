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
import { Ionicons } from '@expo/vector-icons';

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
        <Ionicons name='home' size={24} style={styles.icon} />
        <Text style={styles.navItem}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navItemContainer}>
       <Ionicons name='alert' size={24} style={styles.icon} />
        <Text style={styles.navItem}>Alerts</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navItemContainer}>
        <Ionicons name='hand-left' size={24} style={styles.icon} />
        <Text style={styles.navItem}>Support</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navItemContainer}>
        <Ionicons name='chatbubbles' size={24} style={styles.icon} />
        <Text style={styles.navItem}>Chat</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navItemContainer}>
        <Ionicons name='settings' size={24} style={styles.icon} />
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
    color:"#000",
  },
  navItem: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 12,
    color: '#333',
  },
});
