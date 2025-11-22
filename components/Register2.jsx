import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View, Text, StyleSheet,TextInput} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
export default function Register2Screen(){
    return(
        <View style={styles.container}>
            <Image source={require('../assets/images/verifyOTP.png')} style={styles.image} />
            <Text style={styles.title}>Let's Get You<Text style={styles.highlight}>Started</Text></Text>
            <Text style={styles.subtitle}>What are You looking for exactly?Let's help you!</Text>
               <View style={styles.inputContainer}>
      <Image source={require('../assets/images/home-outline.png')} style={styles.leftIcon} />

      <TextInput
        style={styles.input}
        placeholder="Type of Building"
        placeholderTextColor="#999"
      />

      <Ionicons
        name="chevron-down-outline"
        size={20}
        color="#999"
        style={styles.rightIcon}
      />
    </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});