import { View, Text, Dimensions, ScrollView } from "react-native";
import React from "react";
import Card from "@/src/components/Card";
import PolicyCard from "@/src/components/PolicyCard";
import GestureHandlerSlider from "@/src/components/GestureHandlerSlider";
import { ImagePaths } from "../../constants/ImagePaths";
import { colors } from "../../utils/colors";
import { fonts } from "../../utils/fonts";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import HelpItem from "../../components/HelpItem";
import InsuranceItem from "../../components/InsuranceItem";
import TrustedCastomerInfo from "../../components/TrustedCastomerInfo";
import Slider from "../../components/Slider";

const { width: screenWidth } = Dimensions.get("window");
const HomeScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <GestureHandlerSlider />
      <ScrollView style={{}}>
        <View
          style={{
            paddingHorizontal: scale(13),
            width: "100%",
            backgroundColor: colors.white,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}
        >
          <View
            style={{
              width: scale(60),
              height: verticalScale(4),
              backgroundColor: "#646567",
              borderRadius: 2,
              alignSelf: "center",
              marginTop: verticalScale(15),
              marginBottom: verticalScale(40),
            }}
          ></View>
          <Text
            style={{
              fontSize: 14,
              color: "#000000",
              fontWeight: "500",
              marginBottom: verticalScale(10),
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
        <View
          style={{
            paddingHorizontal: scale(13),
            backgroundColor: colors.background,
          }}
        >
          <Text
            style={{
              fontSize: 14,
              color: colors.black,
              fontWeight: "700",
              paddingVertical: verticalScale(10),
            }}
          >
            Here to help
          </Text>
          <HelpItem />
          <Text
            style={{
              fontSize: 14,
              color: "#000000",
              fontWeight: "700",
              paddingVertical: verticalScale(10),
            }}
          >
            Buy New Insurance
          </Text>
          <InsuranceItem />
          <Text
            style={{
              fontfamily: "Inter",
              fontSize: 12,
              fontWeight: 500,
              lineHeight: 20,
              letterSpacing: 5,
              textAlign: "center",
            }}
          >
            TRUSTED BY CUSTOMER
          </Text>
          <TrustedCastomerInfo />
          {/* <Slider /> */}
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
