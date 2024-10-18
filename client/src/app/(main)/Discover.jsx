import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { ImagePaths } from "../../constants/ImagePaths";
import { SafeAreaView } from "react-native-safe-area-context";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import { colors } from "../../utils/colors";
import { fonts } from "../../utils/fonts";
import Icon from "react-native-vector-icons/Ionicons";

const DiscoverScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Top Section */}
      <Image source={ImagePaths.logo} style={styles.logo} />
      <View style={styles.topSection}>
        <Text style={styles.welcomeText}>Welcome to the world of here</Text>
        <Text style={styles.headerText}>Discover Everything</Text>
      </View>

      {/* Button Section */}
      <View style={{ flexDirection: "row" }}>
        <View style={styles.buttonSection}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Reverse Diabetes</Text>
            <Icon name="trending-up-outline" size={14} color={colors.black} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>File a Claim</Text>
            <Icon name="trending-up-outline" size={14} color={colors.black} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Manage Vehicle</Text>
            <Icon name="trending-up-outline" size={14} color={colors.black} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Create Abha</Text>
            <Icon name="trending-up-outline" size={14} color={colors.black} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Check Data Breach</Text>
            <Icon name="trending-up-outline" size={14} color={colors.black} />
          </TouchableOpacity>
        </View>
        <View style={styles.circle3ImagePart}>
          <Image source={ImagePaths.cercle3} style={styles.circle3Image} />
        </View>
      </View>

      {/* Discover Section */}
      <View style={styles.discoverSection}>
        <Text style={styles.discoverText}>Discover Here</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.allCard}
        >
          <View style={styles.card}>
            <Image source={ImagePaths.health} style={styles.cardImage} />
            <View style={styles.cardText}>
              <Text style={styles.cardTitle}>Health</Text>
              <Text style={styles.cardSubtitle}>Health Tool & Care</Text>
            </View>
          </View>
          <View style={styles.card}>
            <Image source={ImagePaths.vehicle} style={styles.cardImage} />
            <View style={styles.cardText}>
              <Text style={styles.cardTitle}>Vehicle</Text>
              <Text style={styles.cardSubtitle}>Manage Vehicle</Text>
            </View>
          </View>
          <View style={styles.card}>
            <Image source={ImagePaths.pets} style={styles.cardImage} />
            <View style={styles.cardText}>
              <Text style={styles.cardTitle}>Pets</Text>
              <Text style={styles.cardSubtitle}>Manage Your Pets</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: verticalScale(40),
    paddingHorizontal: scale(13),
  },
  logo: {
    width: 70,
    height: 48,
    marginBottom: 10,
  },
  topSection: {
    alignSelf: "center",
    paddingVertical: moderateScale(15),
  },
  welcomeText: {
    fontSize: 14,
    fontWeight: "700",
    color: colors.primary,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "700",
    color: colors.black,
  },
  circle3ImagePart: {
    width: "20%",
    paddingTop: 10,
    // backgroundColor: "red",
  },
  circle3Image: {
    width: moderateScale(61),
    height: moderateScale(65),
  },
  buttonSection: {
    flexDirection: "row",
    flexWrap: "wrap",
    // justifyContent: "center",
    paddingVertical: moderateScale(15),
    width: "76%",
  },
  button: {
    borderColor: "#BDBEBFF5",
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    padding: moderateScale(10),
    marginVertical: verticalScale(5),
    marginRight: scale(5),
    justifyContent: "space-between",
  },
  buttonText: {
    fontSize: 12,
    fontWeight: "700",
    color: colors.black,
  },
  discoverSection: {
    paddingTop: verticalScale(15),
    paddingBottom: verticalScale(10),
  },
  discoverText: {
    fontSize: 14,
    fontWeight: "700",
    marginBottom: verticalScale(10),
  },
  allCard: {},
  card: {
    width: moderateScale(113),
    height: moderateScale(132),
    marginRight: scale(10),
    alignItems: "center",
    justifyContent: "space-evenly",
    borderWidth: 1,
    borderColor: "#BDBEBFF5",
    borderRadius: 10,
    backgroundColor: colors.white,
  },
  cardImage: {
    width: moderateScale(64),
    height: moderateScale(64),
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: colors.black,
    textAlign: "center",
  },
  cardSubtitle: {
    fontSize: 8,
    fontWeight: "700",
    color: "#646567",
    textAlign: "center",
  },
});

export default DiscoverScreen;
