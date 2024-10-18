import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../../utils/colors";
import { fonts } from "../../utils/fonts";
import { ImagePaths } from "../../constants/ImagePaths";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import { Link } from "expo-router";

const InsurancePolicyScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Insurance Card */}
      <View style={styles.card}>
        <Image source={ImagePaths.logo} style={styles.cardLogo} />
        <View style={styles.policyBadge}>
          <Text style={styles.policyBadgeText}>Health Policy</Text>
        </View>

        <Text style={styles.nameText}>XXXXXXXXXXXXXXXX</Text>
        <Text style={styles.policyNameText}>Optima Restore</Text>

        <View style={styles.infoRow}>
          <Text style={styles.infoText}>Basic Sum Insured</Text>
          <Text style={styles.infoText}>Expiring On</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.infoValue}>₹X,XX,XXX</Text>
          <Text style={styles.infoValue}>XX.XX.XXXX</Text>
        </View>
      </View>

      {/* Policy Found Information */}
      <Text style={styles.policyFoundText}>1 Insurance Policy Found</Text>
      <Text style={styles.descriptionText}>
        You have 1 policies registered with HDFC ERGO GIC Limited. You can also
        link policies with your mobile number.
      </Text>

      {/* Continue Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>

      {/* Footer */}
      <Text style={styles.footerText}>
        You can always find this in{" "}
        <Text style={styles.footerTextBold}>My policy</Text> section
      </Text>
      <Link href={"/profileSetting"}>next</Link>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: moderateScale(20),
    alignItems: "center",
  },
  card: {
    backgroundColor: colors.secondary,
    borderRadius: 10,
    width: "100%",
    padding: moderateScale(20),
    marginVertical: verticalScale(20),
    elevation: 5,
    shadowColor: colors.black,
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    marginTop: verticalScale(120),
    marginBottom: verticalScale(80),
  },
  cardLogo: {
    width: scale(60),
    height: verticalScale(33),
    marginLeft: 5,
  },
  logoText: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.white,
  },
  policyBadge: {
    backgroundColor: colors.primary,
    paddingHorizontal: scale(10),
    paddingVertical: verticalScale(5),
    borderRadius: 10,
    position: "absolute",
    right: 20,
    top: 20,
  },
  policyBadgeText: {
    color: colors.white,
    fontSize: 14,
  },
  nameText: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.white,
    marginTop: 20,
  },
  policyNameText: {
    fontSize: 16,
    color: colors.white,
    marginTop: verticalScale(5),
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: verticalScale(10),
  },
  infoText: {
    fontSize: 14,
    color: colors.white,
  },
  infoValue: {
    fontSize: 16,
    color: colors.white,
    fontWeight: "bold",
  },
  policyFoundText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: verticalScale(10),
  },
  descriptionText: {
    fontSize: 14,
    textAlign: "center",
    color: "#555",
    marginBottom: verticalScale(30),
  },
  button: {
    backgroundColor: colors.secondary,
    padding: moderateScale(15),
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
    marginBottom: verticalScale(20),
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
  footerText: {
    fontSize: 12,
    color: "#555",
    textAlign: "center",
  },
  footerTextBold: {
    fontWeight: "bold",
  },
});

export default InsurancePolicyScreen;
