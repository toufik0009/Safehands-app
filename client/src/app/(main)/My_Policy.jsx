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
import CustomCard from "@/src/components/CustomCard";
import { ImagePaths } from "../../constants/ImagePaths";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const My_PolicyScreen = () => {
  return (
    <ScrollView style={styles.main}>
      <View style={styles.topPart}>
        <Image style={{ width: 89, height: 48 }} source={ImagePaths.logo} />
      </View>
      <View style={styles.middlePart}>
        <View style={styles.box}>
          <Text style={styles.heding}>My Polices</Text>
          <View
            style={{
              width: "96%",
              paddingVertical: 5,
              paddingHorizontal: 10,
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

          <CustomCard
            image={ImagePaths.profileImage}
            name={"Lorem, ipsum."}
            about={"Lorem ipsum dolor sit."}
          />
          <Text style={styles.heding}>Expried</Text>
          <CustomCard
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
              backgroundColor: "#75ADF6",
              width: 85,
              height: 31,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 5,
            }}
          >
            <Text
              style={{ color: "#087CE9", fontSize: 10, fontWeight: "bold" }}
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
  );
};

export default My_PolicyScreen;

const styles = StyleSheet.create({
  main: {
    width: width,
  },
  topPart: {
    width: width,
    paddingBottom: 10,
    height: 120,
    justifyContent: "flex-end",
  },
  middlePart: {
    width: width,
    paddingHorizontal: 10,
    paddingTop: 15,
    paddingBottom: 25,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    marginBottom: 0,
  },
  box: {
    width: "100%",
    padding: 8,
    borderWidth: 1,
    borderColor: "#646567",
    borderRadius: 10,
    paddingBottom: 20,
  },
  heding: {
    fontSize: 14,
    color: "#000000",
    fontWeight: "500",
    marginTop: 10,
    marginBottom: 5,
  },
  bottomPart: {
    marginVertical: 20,
    padding: "5%",
    width: "90%",
    backgroundColor: "#FFFFFF",
    alignSelf: "center",
    borderRadius: 10,
    flexDirection: "row",
  },
  bottomPartLeft: {
    width: "70%",
    // backgroundColor: "green",
    gap: 10,
  },
  bottomPartRight: {
    width: "30%",
    // backgroundColor: "red",
    alignSelf: "center",
  },
});
