import React from "react";
import { View,Image,Text} from "react-native-web";
import { StyleSheet } from "react-native";
export default function LandingScreen(){
    return(
        <View style={styles.container}>
            <Image source={require('../assets/images/landing.png')} />
            <Text style={styles.text}>ViewNest</Text>
            <Text style={styles.footerText}>Created by Nziza Ange</Text>
        </View>
);
}

const styles =StyleSheet.create({
       container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
       },
         text:{
            fontSize:30,
            fontWeight:'bold',
            color:'#000'
         },
         footerText:{
            justifyContent:'flex-end',
            fontSize:13,
            color:'#555',
            marginTop:90,
            bottom:0
         }
});