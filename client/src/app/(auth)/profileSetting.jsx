import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";
import { colors } from "../../utils/colors";
import { fonts } from "../../utils/fonts";
import { ImagePaths } from "../../constants/ImagePaths";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";

const ProfileSettingScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerPart}>
        {/* back button */}
        <TouchableOpacity style={styles.backArrow}>
          <Icon name="chevron-back-outline" size={30} color={colors.black} />
        </TouchableOpacity>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Profile Setting</Text>

          {/* Description */}
          <Text style={styles.description}>
            Details that help us know you better
          </Text>

          {/* card Fields */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Phone Number</Text>
            <Text style={styles.text}>+91 7908028426</Text>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Name</Text>
            <Text style={styles.text}>Enter your name</Text>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Date of Birth</Text>
            <Text style={styles.text}>10/12/1992</Text>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>City</Text>
            <Text style={styles.text}>24 parganas north</Text>
          </View>
        </View>
      </View>
      {/* Delete Account Button */}
      <View style={styles.footerPart}>
        <TouchableOpacity style={styles.deleteButton}>
          <Text style={styles.deleteText}>Delete Account</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ImagePaths.background,
    paddingHorizontal: moderateScale(13),
    paddingVertical: verticalScale(30),
    justifyContent: "space-between",
  },
  backArrow: {
    marginBottom: verticalScale(10),
  },
  header: {
    paddingHorizontal: scale(13),
    paddingVertical: verticalScale(20),
    borderWidth: 1,
    borderColor: "#838385",
    borderRadius: 10,
    backgroundColor: colors.white,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "700",
  },
  description: {
    fontSize: 12,
    color: "#646567",
    fontWeight: "700",
    marginBottom: 20,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: "#BDBEBFF5",
    borderRadius: 10,
    marginBottom: verticalScale(12),
    paddingHorizontal: verticalScale(18),
    paddingVertical: scale(10),
    gap: 8,
  },
  label: {
    fontSize: 12,
    color: "#646567",
    fontWeight: "700",
  },
  text: {
    color: colors.black,
    fontWeight: "700",
    fontSize: 14,
  },
  deleteButton: {
    backgroundColor: "transparent",
    alignItems: "center",
  },
  deleteText: {
    color: "#a33",
    fontWeight: "700",
    fontSize: 14,
  },
});

export default ProfileSettingScreen;
