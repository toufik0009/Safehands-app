import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../../utils/colors";
import { fonts } from "../../utils/fonts";
import { ImagePaths } from "../../constants/ImagePaths";

const InsurancePolicyScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Insurance Card */}
      <View style={styles.card}>
        <Text style={styles.logoText}>Logo</Text>

        <View style={styles.policyBadge}>
          <Text style={styles.policyBadgeText}>Health Policy</Text>
        </View>

        <Text style={styles.nameText}>ASIF IMRAN DAFADAR</Text>
        <Text style={styles.policyNameText}>Optima Restore</Text>

        <View style={styles.infoRow}>
          <Text style={styles.infoText}>Basic Sum Insured</Text>
          <Text style={styles.infoText}>Expiring On</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.infoValue}>₹3,00,000</Text>
          <Text style={styles.infoValue}>14.09.2025</Text>
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
        You can always find this in 'My policy' section
      </Text>
      <View style={styles.footerLogoContainer}>
        <Text style={styles.footerText}>Powered by</Text>
        <Image source={ImagePaths.logo} style={styles.footerLogo} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 20,
    alignItems: "center",
  },
  card: {
    backgroundColor: colors.secondary,
    borderRadius: 10,
    width: "100%",
    padding: 20,
    marginVertical: 20,
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    marginTop: 120,
    marginBottom: 80,
  },
  logoText: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.white,
  },
  policyBadge: {
    backgroundColor: colors.primary,
    paddingHorizontal: 10,
    paddingVertical: 5,
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
    color: "#fff",
    marginTop: 20,
  },
  policyNameText: {
    fontSize: 16,
    color: colors.white,
    marginTop: 5,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
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
    marginVertical: 10,
  },
  descriptionText: {
    fontSize: 14,
    textAlign: "center",
    color: "#555",
    marginBottom: 30,
  },
  button: {
    backgroundColor: colors.secondary,
    padding: 15,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
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
  footerLogoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  footerLogo: {
    width: 20,
    height: 20,
    marginLeft: 5,
  },
});

export default InsurancePolicyScreen;
