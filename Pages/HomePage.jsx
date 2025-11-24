import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from "react-native";

export default function HomePageScreen({navigation}) {
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

        {/* TOP HEADER */}
        <View style={styles.headerPart}>
          <Image
            source={require("../assets/images/Ellipse 12.png")}
            style={styles.profilePic}
          />

          <Text style={styles.welcomeText}>Welcome back, Nziza 👋</Text>

          {/* SEARCH BAR */}
          <View style={styles.searchBar}>
            <Image
              source={require("../assets/images/Vector.png")}
              style={styles.searchIcon}
            />
            <TextInput
              placeholder="Search here..."
              placeholderTextColor="#777"
              style={styles.searchInput}
            />
          </View>
        </View>

        {/* CATEGORIES SECTION */}
        <View style={styles.categorySection}>
          <Text style={styles.categories}>Categories</Text>

          <View style={styles.categoryRow}>
            <Image
              source={require("../assets/images/store2.png")}
              style={styles.categoryIcon}
            />
            <Image
              source={require("../assets/images/store2.png")}
              style={styles.categoryIcon}
            />
            <Image
              source={require("../assets/images/store2.png")}
              style={styles.categoryIcon}
            />
            <Image
              source={require("../assets/images/store2.png")}
              style={styles.categoryIcon}
            />
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
    width: "100%",
    alignItems: "center",
    marginBottom: 30,
  },

  profilePic: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginBottom: 10,
  },

  welcomeText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#222",
    marginBottom: 20,
  },

  /* SEARCH BAR */
  searchBar: {
    width: "100%",
    height: 50,
    backgroundColor: "#f1f1f1",
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
  },

  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
    tintColor: "#555",
  },

  searchInput: {
    flex: 1,
    fontSize: 15,
    color: "#000",
  },

  /* CATEGORY SECTION */
  categorySection: {
    width: "100%",
    marginTop: 20,
  },

  categories: {
    fontSize: 18,
    fontWeight: "600",
    color: "#222",
    marginBottom: 15,
  },

  categoryRow: {
    flexDirection: "row",
    gap:40,
    alignItems:"center",
    justifyContent:"center",
  },

  categoryIcon: {
    width:50,
    height:50,
    borderRadius: 12,
    backgroundColor: "#f6f6f6",
  },
});
