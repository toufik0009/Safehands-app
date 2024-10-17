import { View, Text, Button } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Login = () => {
  return (
    <View
      style={{
        backgroundColor: "red",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link style={{ color: "#000" }} href={"/verify_otp"}>
        OTP
      </Link>
    </View>
  );
};

export default Login;
