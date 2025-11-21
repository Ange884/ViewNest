import React from "react";
import { View,Image } from "react-native-web";
import { StyleSheet } from "react-native";
export default function LandingScreen(){
    return(
        <View style={styles.container}>
            <Image source={require('../assets/images/landing.png')} />
        </View>
);
}

const styles =StyleSheet.create({
       container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
       },
});