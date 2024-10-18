import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import { ImagePaths } from "../../constants/ImagePaths";
import { colors } from "../../utils/colors";
import { fonts } from "../../utils/fonts";
import { Link } from "expo-router";
import { useRouter } from "expo-router";

const LoginScreen = () => {
  const router = useRouter();
  const [mobileNumber, setMobileNumber] = useState("");
  const [buttonActive, setButtonActive] = useState(false);

  return (
    <View style={styles.container}>
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image source={ImagePaths.fullLogo} style={styles.logo} />
      </View>

      {/* Log In Section */}
      <View style={styles.loginContainer}>
        <Text style={styles.loginTitle}>Log In</Text>
        <Text style={styles.loginSubtitle}>
          We will send an OTP to this number for verification
        </Text>

        <View style={styles.inputContainer}>
          <Text style={styles.countryCode}>+91</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your mobile number"
            keyboardType="numeric"
            value={mobileNumber}
            onChangeText={setMobileNumber}
          />
        </View>

        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => router.push("/verify_otp")}
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        <Text style={styles.termsText}>
          By proceeding, you agree to the Here app’s{" "}
          <Text style={styles.termsLink}>Terms & Conditions</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dadada",
    justifyContent: "center",
  },
  logoContainer: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 312,
    height: 70,
  },

  loginContainer: {
    flex: 0.5,
    backgroundColor: colors.white,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  loginTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  loginSubtitle: {
    fontSize: 14,
    color: "#666",
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  countryCode: {
    fontSize: 16,
    color: "#333",
    paddingRight: 10,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: colors.gray,
    borderRadius: 10,
    alignItems: "center",
    paddingVertical: 15,
    marginTop: 10,
  },
  loginButtonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
  termsText: {
    fontSize: 12,
    textAlign: "center",
    marginTop: 20,
    color: "#666",
  },
  termsLink: {
    color: "#004d40",
    fontWeight: "bold",
  },
});

export default LoginScreen;
