import { Link } from "expo-router";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import Icon from "react-native-vector-icons/Ionicons";
import { fonts } from "../../utils/fonts";
import { colors } from "../../utils/colors";
const OTPInputScreen = () => {
  const router = useRouter();
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [timer, setTimer] = useState(28);

  const handleInputChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Automatically move to the next input box
    if (value && index < otp.length - 1) {
      nextInput(index + 1);
    }
  };

  const nextInput = (index) => {
    if (index < otp.length && otpInputs[index]) {
      otpInputs[index].focus();
    }
  };

  const otpInputs = [];

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Icon name="chevron-back-outline" size={30} color={colors.black} />
      </TouchableOpacity>

      <Text style={styles.title}>Enter the OTP</Text>
      <Text style={styles.subtitle}>
        An OTP has been sent to +91 7908028426
      </Text>

      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.otpInput}
            value={digit}
            onChangeText={(value) => handleInputChange(value, index)}
            keyboardType="numeric"
            maxLength={1}
            ref={(input) => (otpInputs[index] = input)}
            autoFocus={index === 0}
          />
        ))}
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.smsButton}>
          <Text style={styles.buttonText}>SMS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.whatsappButton}>
          <Text style={styles.buttonText}>WhatsApp</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.resendText}>
        Didn't receive the code? <Text style={styles.resend}>Resend in</Text>{" "}
        {timer}s
      </Text>

      <Link href={"/policy"}>next</Link>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    padding: moderateScale(17),
    // justifyContent: "center",
  },
  backButton: {
    marginVertical: verticalScale(35),
  },
  backText: {
    fontSize: 18,
    color: "#000",
  },
  title: {
    fontSize: 25,
    fontWeight: "600",
    textAlign: "left",
    marginBottom: verticalScale(10),
  },
  subtitle: {
    fontSize: 14,
    color: "gray",
    textAlign: "left",
    marginBottom: verticalScale(20),
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginHorizontal: scale(30),
  },
  otpInput: {
    width: scale(45),
    aspectRatio: 1,
    textAlign: "center",
    fontSize: 24,
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: "#BFC0C5",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: verticalScale(20),
  },
  smsButton: {
    backgroundColor: colors.white,
    paddingVertical: verticalScale(10),
    paddingHorizontal: scale(25),
    borderRadius: 10,
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: "#BFC0C5",
  },
  whatsappButton: {
    backgroundColor: "#fff",
    paddingVertical: verticalScale(10),
    paddingHorizontal: scale(25),
    borderRadius: 10,
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: "#BFC0C5",
  },
  buttonText: {
    fontSize: 16,
    color: colors.black,
  },
  resendText: {
    textAlign: "center",
    color: colors.black,
    marginTop: verticalScale(20),
  },
  resend: {
    fontWeight: "200",
  },
});

export default OTPInputScreen;
