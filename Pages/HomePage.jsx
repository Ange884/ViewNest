import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import NavigationBar from '../components/Navbar.jsx';

export default function HomePageScreen({ navigation }) {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!fontsLoaded) return null;

  // FIXED: correct structure for local image files
  const images = [
    require("../assets/images/splash.png"),
    require("../assets/images/conrad.jpeg"),
    require("../assets/images/splash.png"),
    require("../assets/images/house2.png"),
    require("../assets/images/conrad.jpeg"),
  ];

  return (
    <>
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

        {/* HEADER */}
        <View style={styles.headerPart}>
          <Image
            source={require("../assets/images/Ellipse 12.png")}
            style={styles.profilePic}
          />
          <View style={styles.searchBar}>
            <Ionicons name="search" size={22} color="#666" />
            <TextInput
              placeholder="Search here..."
              placeholderTextColor="#888"
              style={styles.searchInput}
            />
          </View>
        </View>

        {/* CATEGORIES */}
        <View style={styles.categorySection}>
          <Text style={styles.categories}>Categories</Text>

          <View style={styles.categoryRow}>
            <View style={styles.categoryItem}>
              <Image source={require("../assets/images/all.png")} style={styles.categoryIcon} />
              <Text style={styles.UnderText}>Home</Text>
            </View>

            <View style={styles.categoryItem}>
              <Image source={require("../assets/images/allStore.png")} style={styles.categoryIcon} />
              <Text style={styles.UnderText}>Store</Text>
            </View>

            <View style={styles.categoryItem}>
              <Image source={require("../assets/images/apartment.png")} style={styles.categoryIcon} />
              <Text style={styles.UnderText}>Apartment</Text>
            </View>

            <View style={styles.categoryItem}>
              <Image source={require("../assets/images/property.png")} style={styles.categoryIcon} />
              <Text style={styles.UnderText}>Property</Text>
            </View>
          </View>
        </View>

        {/* HOUSES SECTION */}
        <View style={styles.housesContainer}>
          <Text style={styles.categories}>Houses Near You</Text>
          <Image source={require("../assets/images/Saved.png")} style={styles.savedImg} />

          <View
           style={styles.imageRow}
           onPress={() => navigation.navigate('SelectPage')} 
          >
            {images.map((img, index) => (
              <View key={index} style={styles.houseCard}>
  
                <Image source={img} style={styles.houseImage} />

                {/* OVERLAY TEXT */}
                <View style={styles.overlay}>
                  <Text style={styles.priceText}>$1200 / month</Text>
                  <Text style={styles.locationText}>Kigali, Gasabo</Text>
                  <View style={{flexDirection: 'row', marginTop: 5}} >
                  {[1,2,3,4,5].map((star, index) =>(
                    <Ionicons key={index} name="star" size={14} color="#ffd700" />
                  ))}
                  </View>
                </View>
              </View>
            ))}
          </View>
        </View>

      </View>
    </ScrollView>
    <View>
      <NavigationBar />
    </View>
    </>
  );
}

/* -----------------------------------------
   STYLES
-------------------------------------------*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

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

  searchBar: {
    flex: 1,
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 30,
    borderColor: "#5f5e5eff",
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
  },

  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#000",
    marginLeft: 10,
    fontFamily: "Poppins_400Regular",
  },

  /* CATEGORIES */
  categorySection: {
    marginTop: 20,
  },

  categories: {
    fontSize: 20,
    color: "#222",
    marginBottom: 15,
    fontFamily: "Poppins_700Bold",
  },

  categoryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },

  categoryItem: {
    alignItems: "center",
    width: "25%",
  },

  categoryIcon: {
    width: 60,
    height: 60,
  },

  UnderText: {
    marginTop: 5,
    fontSize: 12,
    fontFamily: "Poppins_400Regular",
  },

  /* HOUSES */
  housesContainer: {
    marginTop: 30,
  },

  imageRow: {
    flexDirection: "column",
    gap: 15,
  },

  houseCard: {
    width: "100%",
    height: 180,
    borderRadius: 18,
    overflow: "hidden",
    position: "relative",
    backgroundColor: "#eee",
  },

  houseImage: {
    width: "100%",
    height: "100%",
  },

  /* OVERLAY */
  overlay: {
    position: "absolute",
    width: "100%",
    bottom: 0,
    top:0,
    left:0,
    right:0,
    paddingHorizontal: 15,
    paddingVertical: 8,
    justifyContent:"flex-end",
    backgroundColor: "rgba(0,0,0,0.45)",
  },

  priceText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Poppins_600SemiBold",
  },

  locationText: {
    color: "#ddd",
    fontSize: 14,
    marginTop: 3,
    fontFamily: "Poppins_400Regular",
  },
  savedImg: {
    width: 25,
    height: 25,
    position: "absolute",
    top: 10,
    right: 10,
    color: "#fff",
  },
});
