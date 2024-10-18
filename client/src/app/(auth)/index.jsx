import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ImagePaths } from "../../constants/ImagePaths";
import { colors } from "../../utils/colors";
import { fonts } from "../../utils/fonts";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import { useRouter } from "expo-router";
import { Link } from "expo-router";
import Icon from "react-native-vector-icons/Ionicons";

const LoginScreen = () => {
  const router = useRouter();
  const [mailId, setMailId] = useState("");
  const [password, setPassword] = useState("");
  const [buttonActive, setButtonActive] = useState(false);
  const [secureEntery, setSecureEntery] = useState(true);

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
          <Text style={styles.label}>Email</Text>
          <Icon
            style={styles.icon}
            name="mail-outline"
            size={30}
            color={colors.border}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            keyboardType="numeric"
            value={mailId}
            onChangeText={setMailId}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <TouchableOpacity
            onPress={() => {
              setSecureEntery((prev) => !prev);
            }}
          >
            <Icon
              style={styles.icon}
              name={secureEntery ? "eye" : "eye-off"}
              size={30}
              color={colors.border}
            />
          </TouchableOpacity>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            keyboardType="numeric"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={secureEntery}
          />
        </View>

        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => router.push("/verify_otp")}
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        <Text style={styles.termsText}>By proceeding, you agree to</Text>
        <Text style={styles.termsLink}>Terms & Conditions</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: "center",
  },
  logoContainer: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: moderateScale(300),
    height: moderateScale(60),
  },
  label: {
    position: "absolute",
    backgroundColor: colors.white,
    top: -10,
    left: 25,
    paddingHorizontal: scale(5),
    fontSize: 14,
    fontWeight: "700",
    color: colors.black,
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
    marginBottom: verticalScale(10),
  },
  loginSubtitle: {
    fontSize: 12,
    color: colors.border,
    fontWeight: "700",
    marginBottom: verticalScale(20),
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 10,
    paddingHorizontal: scale(10),
    marginBottom: verticalScale(20),
  },
  icon: {
    color: colors.black,
    paddingRight: scale(10),
    marginRight: scale(10),
    borderRightWidth: 1,
    borderRightColor: colors.border,
  },
  input: {
    flex: 1,
    height: verticalScale(50),
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: colors.gray,
    borderRadius: 10,
    alignItems: "center",
    paddingVertical: verticalScale(15),
    marginTop: 10,
  },
  loginButtonText: {
    fontSize: 14,
    color: colors.white,
    fontWeight: "bold",
    fontWeight: "700",
  },
  termsText: {
    fontSize: 14,
    textAlign: "center",
    marginTop: verticalScale(20),
    fontWeight: "700",
    color: colors.border,
  },
  termsLink: {
    fontSize: 14,
    color: colors.primary,
    fontWeight: "bold",
    fontWeight: "700",
    textAlign: "center",
  },
});

export default LoginScreen;
