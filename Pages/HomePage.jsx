import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { View, Image, Text, StyleSheet, TextInput, ScrollView } from "react-native";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold
} from "@expo-google-fonts/poppins";


export default function HomePageScreen({ navigation }) {
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "#fff" }}
      contentContainerStyle={{
        flexGrow: 1,
        paddingHorizontal: 20,
        paddingTop: 40,
        paddingBottom: 40,
      }}
    >
      <View style={styles.container}>

        {/* ---------- HEADER ---------- */}
        <View style={styles.headerPart}>
          <Image
            source={require("../assets/images/Ellipse 12.png")}
            style={styles.profilePic}
          />

          {/* SEARCH BAR */}
          <View style={styles.searchBar}>
            <Ionicons name="search" size={22} color="#666" />
            <TextInput
              placeholder="Search here..."
              placeholderTextColor="#888"
              style={styles.searchInput}
            />
          </View>
        </View>

        {/* ---------- CATEGORIES ---------- */}
        <View style={styles.categorySection}>
  <Text style={styles.categories}>Categories</Text>

  <View style={styles.categoryRow}>
    <View style={styles.categoryItem}>
      <Image
        source={require("../assets/images/all.png")}
        style={styles.categoryIcon}
      />
      <Text style={styles.UnderText}>Home</Text>
    </View>

    <View style={styles.categoryItem}>
      <Image
        source={require("../assets/images/allStore.png")}
        style={styles.categoryIcon}
      />
      <Text style={styles.UnderText}>Store</Text>
    </View>

    <View style={styles.categoryItem}>
      <Image
        source={require("../assets/images/apartment.png")}
        style={styles.categoryIcon}
      />
      <Text style={styles.UnderText}>Apartment</Text>
    </View>

    <View style={styles.categoryItem}>
      <Image
        source={require("../assets/images/property.png")}
        style={styles.categoryIcon}
      />
      <Text style={styles.UnderText}>Property</Text>
    </View>
  </View>
</View>

      </View>
    </ScrollView>
  );
}

/* -----------------------------------------
   STYLES
-------------------------------------------*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  /* HEADER PART */
  headerPart: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    marginBottom: 20,
  },

  profilePic: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },

  /* SEARCH BAR */
  searchBar: {
    flex: 1,
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 30,
    borderColor:"#5f5e5eff",
    borderWidth:1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    
  },

  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#000",
    marginLeft: 10,
    fontFamily:"Poppins_400Regular",
  },

  /* CATEGORY SECTION */
  categorySection: {
    marginTop: 20,
  },

  categories: {
    fontSize: 20,
    fontWeight: "600",
    color: "#222",
    marginBottom: 15,
    fontFamily:"Poppins_400Regular",
  },

  categoryRow: {
  flexDirection: "row",
  justifyContent: "space-between",
  flexWrap: "wrap",
  width: "100%",
  marginTop: 15,
},

categoryItem: {
  alignItems: "center",
  width: "23%", // 4 items per row (adjust if needed)
},

categoryIcon: {
  width: 50,
  height: 50,
  resizeMode: "contain",
},

UnderText: {
  marginTop: 5,
  fontSize: 12,
  fontFamily:"Poppins_400Regular",
},

});
