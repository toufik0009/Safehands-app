import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { ImagePaths } from "../../constants/ImagePaths";
import CustomCard from "@/src/components/CustomCard";
import Icon from "react-native-vector-icons/Ionicons";
import { FontAwesome } from "@expo/vector-icons";
import { colors } from "../../utils/colors";
import { fonts } from "../../utils/fonts";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
const ProfileScreen = () => {
  return (
    <ScrollView>
      <View style={{ alignItems: "center" }}>
        <View style={{ width: "100%", height: verticalScale(100) }}></View>
        <View
          style={{
            width: "94%",
            backgroundColor: "#FFFFFF",
            borderWidth: 1,
            borderColor: "#838385",
            borderRadius: 10,
            paddingHorizontal: scale(10),
            paddingBottom: verticalScale(15),
            marginBottom: verticalScale(15),
          }}
        >
          <View style={{ alignItems: "center" }}>
            <View
              style={{
                marginTop: verticalScale(-50),
                width: moderateScale(80),
                height: moderateScale(80),
                borderRadius: moderateScale(40),
                backgroundColor: colors.tarnary,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Icon name="person-sharp" size={30} color={colors.white} />
            </View>
            <Text
              style={{
                fontSize: 14,
                paddingHorizontal: scale(15),
                backgroundColor: colors.tarnary,
                borderRadius: 20,
                marginVertical: 5,
              }}
            >
              Add Your Name
            </Text>
            <Text
              style={{
                fontSize: 14,
                paddingHorizontal: scale(10),
                marginVertical: verticalScale(5),
              }}
            >
              +91 1234567890
            </Text>
          </View>
          <View
            style={{
              marginTop: 5,
              marginBottom: 10,
              borderWidth: 0.5,
              borderColor: "#BDBEBF",
              borderRadius: 10,
              justifyContent: "space-between",
              padding: moderateScale(10),
              flexDirection: "row",
            }}
          >
            <View
              style={{
                width: "70%",
                padding: moderateScale(10),
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "600",
                }}
              >
                Create your ABHA Number
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "300",
                }}
              >
                Keep all your health records in one place ➜
                {/* <Text style={{}}>
                  <TouchableOpacity
                    style={{
                      backgroundColor: "red",
                    }}
                  >
                    <Image
                      style={{}}
                      source={require("../../assets/images/ArrowText.png")}
                    />
                  </TouchableOpacity>
                </Text> */}
              </Text>
            </View>
            <View style={{ width: "30%" }}>
              <Image source={ImagePaths.CreditCardImage} />
            </View>
          </View>
          <CustomCard
            icon={"person-sharp"}
            name={"My Profile"}
            about={"Name, Date of Birth, City"}
          />
          <CustomCard
            icon={"list"}
            name={"Sync my health data"}
            about={"Track all of your activity"}
          />
          <CustomCard
            icon={"share-social-sharp"}
            name={"Share App"}
            about={"Share here app with your friend & fimaly"}
          />
          <CustomCard
            icon={"book"}
            name={"Terms & Conditions"}
            about={"read Terms & Conditions of Here"}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
