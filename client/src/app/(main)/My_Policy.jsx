import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MyPolicyCard from "@/src/components/MyPolicyCard";
import { ImagePaths } from "../../constants/ImagePaths";
import { colors } from "../../utils/colors";
import { fonts } from "../../utils/fonts";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const My_PolicyScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView style={styles.main}>
        <View style={styles.topPart}>
          <Image
            style={{ width: scale(89), height: verticalScale(48) }}
            source={ImagePaths.logo}
          />
        </View>
        <View style={styles.middlePart}>
          <View style={styles.box}>
            <Text style={styles.heding}>My Polices</Text>
            <View
              style={{
                width: "96%",
                paddingVertical: verticalScale(5),
                paddingHorizontal: scale(10),
                backgroundColor: "#FFE0D4",
                borderRadius: 10,
                alignSelf: "center",
              }}
            >
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam,
                repellendus.
              </Text>
            </View>
            <Text style={styles.heding}>Active</Text>

            <MyPolicyCard
              image={ImagePaths.profileImage}
              name={"Lorem, ipsum."}
              about={"Lorem ipsum dolor sit."}
            />
            <Text style={styles.heding}>Expried</Text>
            <MyPolicyCard
              image={ImagePaths.profileImage}
              name={"Lorem, ipsum."}
              about={"Lorem ipsum dolor sit."}
            />
          </View>
        </View>
        <View style={styles.bottomPart}>
          <View style={styles.bottomPartLeft}>
            <Text style={{ fontSize: 14 }}>Lorem ipsum dolor sit amet.</Text>
            <Text style={{ fontSize: 10 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas aut
              eius amet tempora iure nihil explicabo reprehenderit libero eos
              harum. Sapiente rerum neque molestiae velit sint voluptate eaque
              voluptatibus laborum.
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: colors.secondary,
                width: scale(85),
                height: verticalScale(31),
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 5,
              }}
            >
              <Text
                style={{
                  color: colors.white,
                  fontSize: 10,
                  fontWeight: "bold",
                }}
              >
                Link Policy
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bottomPartRight}>
            <Image source={ImagePaths.PrivacyPolicyImage} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default My_PolicyScreen;

const styles = StyleSheet.create({
  main: {
    width: width,
  },
  topPart: {
    width: width,
    paddingBottom: verticalScale(10),
    height: verticalScale(100),
    justifyContent: "flex-end",
  },
  middlePart: {
    width: width,
    paddingHorizontal: scale(10),
    paddingTop: verticalScale(15),
    paddingBottom: verticalScale(25),
    backgroundColor: colors.white,
    alignItems: "center",
    marginBottom: 0,
  },
  box: {
    width: "100%",
    padding: moderateScale(8),
    borderWidth: 1,
    borderColor: "#646567",
    borderRadius: 10,
    paddingBottom: verticalScale(20),
  },
  heding: {
    fontSize: 14,
    color: "#000000",
    fontWeight: "500",
    marginTop: verticalScale(10),
    marginBottom: verticalScale(5),
  },
  bottomPart: {
    marginVertical: verticalScale(20),
    padding: "5%",
    width: "90%",
    backgroundColor: colors.white,
    alignSelf: "center",
    borderRadius: 10,
    flexDirection: "row",
  },
  bottomPartLeft: {
    width: "70%",
    // backgroundColor: "green",
    gap: moderateScale(10),
  },
  bottomPartRight: {
    width: "30%",
    // backgroundColor: "red",
    alignSelf: "center",
  },
});
