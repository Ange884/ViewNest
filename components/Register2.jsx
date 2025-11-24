import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

// 🔥 CONSTANT DATA FOR EACH DROPDOWN
const DROPDOWN_DATA = [
  {
    id: 1,
    placeholder: "Type of Building",
    icon: require("../assets/images/house-building 3.png"),
    options: [
      require("../assets/images/Frame 555.png"),
      require("../assets/images/Frame 556.png"),
      require("../assets/images/Frame 557.png"),
    ],
  },
  {
    id: 2,
    placeholder: "Construction Material",
    icon: require("../assets/images/Component 7.png"),
    options: [
      require("../assets/images/Frame 556.png"),
      require("../assets/images/Frame 555.png"),
    ],
  },
  {
    id: 3,
    placeholder: "Preferred Size",
    icon: require("../assets/images/Component 8.png"),
    options: [
      require("../assets/images/Frame 557.png"),
      require("../assets/images/Frame 556.png"),
    ],
  },
  {
    id: 4,
    placeholder: "Additional Services",
    icon: require("../assets/images/Component 9.png"),
    options: [
      require("../assets/images/Frame 555.png"),
      require("../assets/images/Frame 557.png"),
    ],
  },
];

// 🔽 Dropdown Component
function DropDownInput({ icon, placeholder, options }) {
  const [open, setOpen] = useState(false);

  return (
    <View style={{ width: "100%", marginBottom: 20 }}>
      {/* input row */}
      <View style={styles.inputContainer}>
        <Image source={icon} style={styles.leftIcon} />

        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="#777"
        />

        <TouchableOpacity onPress={() => setOpen(!open)}>
          <Ionicons
            name={open ? "chevron-up" : "chevron-down"}
            size={22}
            color="#3a3a3a"
          />
        </TouchableOpacity>
      </View>

      {/* dropdown */}
      {open && (
        <View style={styles.dropdown}>
          <Text style={styles.selectOption}>
            Choose your <Text style={styles.highlight}>Option</Text>
          </Text>

          {options.map((imgSrc, index) => (
            <TouchableOpacity key={index} style={styles.dropdownItem}>
              <Image source={imgSrc} style={{ width: 130, height: 30 }} />
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
}

// 🔥 MAIN SCREEN
export default function Register2Screen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      <Image
        source={require("../assets/images/people.png")}
        style={styles.headerImage}
      />

      <Text style={styles.title}>
        Let's get you <Text style={styles.highlight}>Started</Text>
      </Text>

      <Text style={styles.subtitle}>
        What are you looking for exactly? Let’s help you!
      </Text>

      {/* MAPPING THE DROPDOWNS */}
      {DROPDOWN_DATA.map((item) => (
        <DropDownInput
          key={item.id}
          icon={item.icon}
          placeholder={item.placeholder}
          options={item.options}
        />
      ))}

      <TouchableOpacity style={styles.button} activeOpacity={0.8}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 40,
    alignItems: "center",
    backgroundColor: "#fff",
  },

  headerImage: {
    width: 220,
    height: 220,
    resizeMode: "contain",
    marginBottom: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: "700",
    color: "#000",
  },

  highlight: {
    color: "#fe8b00",
  },

  subtitle: {
    fontSize: 14,
    marginBottom: 25,
    color: "#444",
    textAlign: "center",
    width: "90%",
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "#f8f8f8",
  },

  leftIcon: {
    width: 22,
    height: 22,
    resizeMode: "contain",
    marginRight: 12,
  },

  input: {
    flex: 1,
    fontSize: 15,
    color: "#000",
  },

  dropdown: {
    width: "100%",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 12,
    paddingVertical: 10,
    marginTop: 8,

    // shadow
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 4,
  },

  selectOption: {
    fontSize: 15,
    fontWeight: "600",
    paddingHorizontal: 15,
    marginBottom: 10,
    color: "#000",
  },

  dropdownItem: {
    paddingHorizontal: 15,
    paddingVertical: 6,
  },

  button: {
    width: "100%",
    backgroundColor: "#fe8b00",
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 20,
  },

  buttonText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#fff",
  },
});
