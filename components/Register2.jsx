import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const PRIMARY_RED = "#E80000";

/* ----------------------------------------------
   REUSABLE DROPDOWN INPUT COMPONENT
------------------------------------------------*/
function DropDownInput({ icon, placeholder }) {
  const [open, setOpen] = useState(false);

  return (
    <View style={{ width: "100%" }}>
      {/* Input Row */}
      <View style={styles.inputContainer}>
        <Image source={icon} style={styles.leftIcon} />

        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="#3a3a3aff"
        />

        {/* Chevron button */}
        <TouchableOpacity onPress={() => setOpen(!open)}>
          <Ionicons
            name={open ? "chevron-up" : "chevron-down"}
            size={22}
            color="#3a3a3aff"
            style={styles.rightIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Dropdown menu */}
      {open && (
        <View style={styles.dropdown}>
          <Text style={styles.selectOption}>make your  <Text style={styles.highlight}>Choice </Text></Text>
          <Text style={styles.dropdownItem}><Image source={require("../assets/images/Frame 555.png")} /></Text>
          <Text style={styles.dropdownItem}><Image source={require("../assets/images/Frame 556.png")} /></Text>
          <Text style={styles.dropdownItem}><Image source={require("../assets/images/Frame 557.png")} /></Text>
        </View>
      )}
    </View>
  );
}

/* ----------------------------------------------
   MAIN SCREEN COMPONENT
------------------------------------------------*/
export default function Register2Screen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image 
        source={require("../assets/images/Group 1.png")}
        style={styles.image}
      />

      <Text style={styles.title}>
        Let's Get You <Text style={styles.highlight}>Started</Text>
      </Text>

      <Text style={styles.subtitle}>
        What are you looking for exactly? Let's help you!
      </Text>

      {/* Reusable dropdown inputs */}
      <DropDownInput 
        icon={require("../assets/images/house-building 3.png")}
        placeholder="Type of Building"
      />

      <DropDownInput 
        icon={require("../assets/images/Component 7.png")}
        placeholder="Construction Material"
      />

      <DropDownInput 
        icon={require("../assets/images/Component 8.png")}
        placeholder="Preferred Size"
      />

      <DropDownInput 
        icon={require("../assets/images/Component 9.png")}
        placeholder="Additional Services"
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

/* ----------------------------------------------
   STYLES
------------------------------------------------*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 25,
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    width: 180,
    height: 140,
    marginBottom: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#333",
    textAlign: "center",
    marginBottom: 5,
    fontFamily: "poppins",
  },
  selectOption:{
     fontSize: 13,
     color: "#000",
     marginBottom: 8,
     fontFamily: "poppins",
     fontWeight:"600",
     justifyContent:"center",
     alignItems:"center"
  },

  highlight: {
    color: PRIMARY_RED,
    fontFamily: "poppins",
  },

  subtitle: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginBottom: 25,
    paddingHorizontal: 10,
    fontFamily: "poppins",
  },

  inputContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#5e5d5dff",
    borderRadius: 16,
    paddingHorizontal: 12,
    height: 55,
    marginBottom: 15,
  },

  leftIcon: {
    width: 22,
    height: 22,
    marginRight: 10,
  },

  input: {
    flex: 1,
    fontSize: 15,
    fontFamily: "poppins",
  },

  rightIcon: {
    marginLeft: 10,
  },

  dropdown: {
    backgroundColor: "#fafafa",
    borderWidth: 1,
    borderColor: "#d0d0d0",
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginTop: -10,
    marginBottom: 10,
  },

  dropdownItem: {
    paddingVertical: 8,
    fontSize: 15,
    fontFamily: "poppins",
  },

  button: {
    backgroundColor: "#242424",
    paddingVertical: 12,
    borderRadius: 25,
    width: "100%",
    alignItems: "center",
    marginTop: 10,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Poppins_600SemiBold",
  },
});
