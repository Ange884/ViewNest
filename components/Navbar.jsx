import React from 'react';
import {useFonts, Poppins_400regular, Poppins_600SemiBold, Poppins_700Bold} from '@expo-google-fonts/poppins';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function NavigationBar(){
    const [fontsLoaded] = useFonts({
        Poppins_400regular,
        Poppins_600SemiBold,
        Poppins_700Bold
    });

    if(!fontsLoaded) return null;

    return(
        <View style={styles.navbar}>
            <TouchableOpacity>
                <Image source={require('../assets/images/home-icon.png')} style={{width:24, height:24}} />
                <Text style={styles.navItem}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.navItem}>Search</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.navItem}>Profile</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 15,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#ddd',
    },
    navItem: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 16,
        color: '#333',
    },
});