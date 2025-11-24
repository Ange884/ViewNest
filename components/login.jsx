import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity, TextInput, ActivityIndicator,ScrollView } from "react-native";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold
} from "@expo-google-fonts/poppins";

export default function LoginScreen(){
        <ScrollView style={{flex:1, backgroundColor:"#fff"}}
            contentContainerStyle={{
            paddingHorizontal: 20,
            paddingTop: 40,
            paddingBottom: 40,
            alignItems: "center",
            }} 
        >

            <View style={Styles.container}>
                <Image source={require("../assets/images/sitting.png")}/>
                 <Text style={styles.subText}>Welcome Back,<Text style={styles.highlight}>Ange</Text></Text>
                 <TextInput style={styles.TextInput}
                  placeholder="Password"
                  placeholderTextColor={"#000"}
                  <Image source={require("../assets/images/eye.png")}/>
                 />
                 <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Login</Text>
                 </TouchableOpacity>

                 <Image source={require("../assets/images/fingerprint 1.png")}/>
            </View>
        </ScrollView>
}