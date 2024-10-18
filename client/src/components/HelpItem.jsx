import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { ImagePaths } from "../../src/constants/ImagePaths";
import { colors } from "../utils/colors";
import { fonts } from "../utils/fonts";

const HelpItem = () => {
  const helpOptions = [
    { icon: "car", label: "Add Vehicle" },
    { icon: "home", label: "Check Challan" },
    { icon: "home", label: "Find Medical Expenses" },
    { icon: "home", label: "Check Data Breach" },
    { icon: "home", label: "Diabetes Reversal" },
    { icon: "home", label: "Pre-Diabetes risk" },
    { icon: "home", label: "OPD Centre" },
    { icon: "home", label: "View All" },
  ];
  const renderHelpItem = ({ item }) => (
    <View style={styles.helpItem}>
      <Icon style={styles.icon} name={item.icon} size={24} color="#000" />
      <Text style={styles.helpText}>{item.label}</Text>
    </View>
  );
  return (
    <View style={styles.contentContainer}>
      <FlatList
        data={helpOptions}
        renderItem={renderHelpItem}
        keyExtractor={(item) => item.label}
        numColumns={4}
        style={styles.flatList}
        columnWrapperStyle={styles.columnWrapper}
      />
    </View>
  );
};

export default HelpItem;

const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
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
  icon: {
    padding: 15,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 10,
  },
  helpText: {
    marginTop: 5,
    fontSize: 12,
    textAlign: "center",
  },
});
