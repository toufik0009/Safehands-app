import { View, Text, Dimensions } from "react-native";
import React from "react";
import Card from "@/src/components/Card";
import PolicyCard from "@/src/components/PolicyCard";
import GestureHandlerSlider from "@/src/components/GestureHandlerSlider";
import { ImagePaths } from "../../constants/ImagePaths";

const { width: screenWidth } = Dimensions.get("window");
const HomeScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <GestureHandlerSlider />
      <View
        style={{
          width: "100%",
          paddingHorizontal: 20,
          backgroundColor: "#FFFFFF",
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}
      >
        <View
          style={{
            width: 60,
            height: 4,
            backgroundColor: "#646567",
            borderRadius: 2,
            alignSelf: "center",
            marginTop: 15,
            marginBottom: 40,
          }}
        ></View>
        <Text
          style={{
            fontSize: 14,
            color: "#000000",
            fontWeight: "500",
            marginBottom: 10,
          }}
        >
          Needs Your Attention
        </Text>
        <Card
          image={ImagePaths.profileImage}
          name={"Volunteer Profile Unlocked"}
          about={"Start Sharing your Experience"}
        />
        <PolicyCard />
      </View>
    </View>
  );
};

export default HomeScreen;
