import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const OTPInputScreen = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
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
      <TouchableOpacity style={styles.backButton}>
        <Text style={styles.backText}>{"<"}</Text>
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    padding: 20,
    // justifyContent: "center",
  },
  backButton: {
    marginTop: 20,
    marginBottom: 10,
  },
  backText: {
    fontSize: 18,
    color: "#000",
  },
  title: {
    fontSize: 25,
    fontWeight: "600",
    textAlign: "left",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: "gray",
    textAlign: "left",
    marginBottom: 20,
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 0,
  },
  otpInput: {
    width: 45,
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
    marginTop: 20,
  },
  smsButton: {
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 10,
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: "#BFC0C5",
  },
  whatsappButton: {
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 10,
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: "#BFC0C5",
  },
  buttonText: {
    fontSize: 16,
    color: "#000",
  },
  resendText: {
    textAlign: "center",
    color: "#000",
    marginTop: 20,
  },
  resend: {
    fontWeight: "200",
  },
});

export default OTPInputScreen;
