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
import { Ionicons } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/Ionicons";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import { colors } from "../utils/colors";
import { fonts } from "../utils/fonts";

const InsuranceItem = () => {
  const insuranceOptions = [
    { icon: "car", title: "Health", price: "₹271/year" },
    { icon: "car", title: "2 Wheeler", price: "₹517/year" },
    { icon: "car", title: "4 Wheeler", price: "₹7044/year" },
    { icon: "car", title: "Travel", price: "₹207/year" },
    { icon: "car", title: "Pet", price: "₹707/year" },
    { icon: "car", title: "Home", price: "₹967/year" },
  ];

  const renderInsuranceItem = ({ item }) => (
    <View style={styles.insuranceItem}>
      <Icon name={item.icon} size={20} color={"green"} />
      <Text style={styles.insuranceLabel}>{item.title}</Text>
      <Text style={styles.insurancePrice}>Starting @ {item.price}</Text>
    </View>
  );

  return (
    <View style={styles.contentContainer}>
      <FlatList
        data={insuranceOptions}
        scrollEnabled={false}
        renderItem={renderInsuranceItem}
        keyExtractor={(item) => item.title}
        numColumns={3}
        style={styles.flatList}
        columnWrapperStyle={styles.columnWrapper}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: colors.background,
  },
  flatList: {
    paddingVertical: verticalScale(20),
  },
  columnWrapper: {
    justifyContent: "space-between",
  },
  insuranceItem: {
    width: scale(100),
    height: verticalScale(113),
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: moderateScale(15),
    backgroundColor: colors.white,
    borderRadius: 10,
    marginBottom: verticalScale(15),
    borderWidth: 1,
    borderColor: colors.border,
  },
  insuranceLabel: {
    fontSize: 14,
    fontWeight: "600",
  },
  insurancePrice: {
    fontSize: 12,
    color: "gray",
  },
});

export default InsuranceItem;
