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
import { ScrollView } from 'react-native-web';

export default function SelectPage() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold
  });

  if (!fontsLoaded) return null;

  return (
    <ScrollView style={{flex:1, }}
    contentContainerStyle={{
      flexGrow: 1,
      paddingHorizontal: 20,
      paddingTop: 40,
      paddingBottom: 40,
    }}>
    <View style={styles.container}>
          <View style={styles.ImageBg}>
              <Image source={require('../assets/images/park.png')} style={styles.image} />
             </View>
          </View>

      </ScrollView>
  );
}