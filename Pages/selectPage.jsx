import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function HouseDetails({ route }) {
  const { house } = route.params;

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>

      {/* FULL IMAGE */}
      <Image source={house.image} style={styles.image} />

      {/* WHITE INFO CONTAINER */}
     <View style={styles.floatingContainer}>
         
         </View>


      <View style={styles.detailsContainer}>

        <Text style={styles.price}>{house.price}</Text>
        <Text style={styles.place}>{house.place}</Text>

        {/* STARS */}
        <View style={styles.starsRow}>
          {[...Array(5)].map((_, index) => (
            <Ionicons
              key={index}
              name={index < house.rating ? "star" : "star-outline"}
              size={18}
              color="#ffd700"
            />
          ))}
        </View>

        {/* DESCRIPTION */}
        <Text style={styles.description}>
          This beautiful house is located in a quiet and secure neighborhood.
          It offers modern rooms, clean surroundings, reliable water and
          electricity, and easy access to the main road. Perfect for comfortable
          living.
        </Text>

        <View style={styles.travelPlaces}>
             <Image source={require("../assets/images/place1.png")}/>
             <Image source={require("../assets/images/place1.png")}/>
          </View>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 280,
  },

  detailsContainer: {
    backgroundColor: "#fff",
    padding: 20,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: -25,
  },

  price: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#222",
  },

  place: {
    fontSize: 16,
    color: "#666",
    marginTop: 5,
  },

  starsRow: {
    flexDirection: "row",
    marginVertical: 10,
  },

  description: {
    fontSize: 15,
    lineHeight: 22,
    color: "#444",
    marginTop: 10,
  },
  travelPlaces:{
    flexDirection:"row",
    gap:10,
  }
});

