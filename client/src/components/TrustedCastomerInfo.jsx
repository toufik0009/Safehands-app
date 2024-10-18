import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { ImagePaths } from "../../src/constants/ImagePaths";
import { colors } from "../utils/colors";
import { fonts } from "../utils/fonts";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
const TrustedCastomerInfo = () => {
  const TrustedCastomerInfo = [
    { icon: "car", customersNo: "24/7", title: "Customer Support" },
    { icon: "car", customersNo: "12000", title: "Cashless Hospital" },
    { icon: "car", customersNo: "10000", title: "Cashless Garages" },
  ];
  const renderTrustedCastomerInfo = ({ item, index }) => (
    <View style={styles.infoCard}>
      <Icon
        style={styles.icon}
        name={item.icon}
        size={20}
        color={colors.black}
      />
      <Text style={styles.numberText}>{item.customersNo}</Text>
      <Text style={styles.titleText}>{item.title}</Text>
    </View>
  );
  return (
    <View style={styles.contentContainer}>
      <FlatList
        scrollEnabled={false}
        data={TrustedCastomerInfo}
        renderItem={renderTrustedCastomerInfo}
        keyExtractor={(item) => item.title}
        numColumns={4}
        style={styles.flatList}
        columnWrapperStyle={styles.columnWrapper}
      />
    </View>
  );
};

export default TrustedCastomerInfo;

const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: colors.background,
  },
  flatList: {
    paddingVertical: verticalScale(20),
    paddingHorizontal: scale(20),
  },
  columnWrapper: {
    justifyContent: "space-between",
  },
  infoCard: {
    alignItems: "center",
    width: scale(80),
  },
  icon: {
    padding: moderateScale(15),
    backgroundColor: colors.tarnary,
    borderRadius: 10,
  },
  numberText: {
    fontSize: 24,
    fontWeight: "700",
    marginTop: 8,
    textAlign: "center",
    lineHeight: 29,
  },
  titleText: {
    fontFamily: "Montserrat",
    fontSize: 12,
    color: "#646567",
    textAlign: "center",
    marginTop: 4,
    fontWeight: "700",
    lineHeight: 15,
  },
});
