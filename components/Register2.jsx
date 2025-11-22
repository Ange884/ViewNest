import React from 'react';
import { View, Text, StyleSheet,TextInput} from 'react-native';
export default function Register3(){
    return(
        <View style={styles.container}>
            <Image source={require('../assets/images/verifyOTP.png')} style={styles.image} />
            <Text style={styles.title}>Let's Get You<Text style={styles.highlight}>Started</Text></Text>
            <Text style={styles.subtitle}>What are You looking for exactly?Let's help you!</Text>
            <TextInput style={styles.input} 
            placeholder="Type of Building" 
            placeholderTextColor="#999" />
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