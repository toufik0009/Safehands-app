import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // for icons

const HomeScreen = () => {
  const helpOptions = [
    { icon: "car-outline", label: "Add Vehicle" },
    { icon: "document-outline", label: "Check Challan" },
    { icon: "medkit-outline", label: "Find Medical Expenses" },
    { icon: "shield-outline", label: "Check Data Breach" },
    { icon: "heart-outline", label: "Diabetes Reversal" },
    { icon: "thermometer-outline", label: "Pre-Diabetes risk" },
    { icon: "add-circle-outline", label: "OPD Centre" },
    { icon: "grid-outline", label: "View All" },
  ];

  const insuranceOptions = [
    { label: "Health", price: "₹271/year" },
    { label: "2 Wheeler", price: "₹517/year" },
    { label: "4 Wheeler", price: "₹7044/year" },
    { label: "Travel", price: "₹207/year" },
    { label: "Pet", price: "₹707/year" },
    { label: "Home", price: "₹967/year" },
  ];

  const renderHelpItem = ({ item }) => (
    <View style={styles.helpItem}>
      <Ionicons name={item.icon} size={24} color="#000" />
      <Text style={styles.helpText}>{item.label}</Text>
    </View>
  );

  const renderInsuranceItem = ({ item }) => (
    <View style={styles.insuranceItem}>
      <Text style={styles.insuranceLabel}>{item.label}</Text>
      <Text style={styles.insurancePrice}>Starting @ {item.price}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{ uri: "https://via.placeholder.com/50" }} // Replace with your logo URI
          style={styles.logo}
        />
      </View>

      {/* Main Content */}
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* Help Section */}
        <Text style={styles.sectionTitle}>Here to help</Text>
        <FlatList
          data={helpOptions}
          renderItem={renderHelpItem}
          keyExtractor={(item) => item.label}
          numColumns={4}
          style={styles.flatList}
          columnWrapperStyle={styles.columnWrapper}
        />

        {/* Buy New Insurance Section */}
        <Text style={styles.sectionTitle}>Buy New Insurance</Text>
        <FlatList
          data={insuranceOptions}
          renderItem={renderInsuranceItem}
          keyExtractor={(item) => item.label}
          numColumns={3}
          style={styles.flatList}
          columnWrapperStyle={styles.columnWrapper}
        />
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="home-outline" size={24} color="#000" />
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="search-outline" size={24} color="#000" />
          <Text>Discover</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="document-text-outline" size={24} color="#000" />
          <Text>My Policy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="person-outline" size={24} color="#000" />
          <Text>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    height: 120,
    backgroundColor: "#A0522D", // brown header color
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 60,
    height: 60,
  },
  contentContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
  },
  flatList: {
    marginBottom: 20,
  },
  columnWrapper: {
    justifyContent: "space-between",
  },
  helpItem: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    width: 70,
  },
  helpText: {
    marginTop: 5,
    fontSize: 12,
    textAlign: "center",
  },
  insuranceItem: {
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    width: "30%",
    marginBottom: 15,
  },
  insuranceLabel: {
    fontSize: 14,
    fontWeight: "600",
  },
  insurancePrice: {
    fontSize: 12,
    color: "gray",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  navItem: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;
