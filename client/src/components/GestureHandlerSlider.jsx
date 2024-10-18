import "react-native-gesture-handler";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import AutoSlider from "./AutoSlider";
import { Dimensions, TouchableOpacity, View } from "react-native";
import { Text } from "react-native";
const { width: screenWidth } = Dimensions.get("window");
export default function GestureHandlerSlider() {
  return (
    <GestureHandlerRootView
      style={{
        width: screenWidth,
        height: screenWidth * 0.75,
      }}
    >
      <AutoSlider />
      <View
        style={{
          width: screenWidth,
          position: "absolute",
          paddingHorizontal: 30,
          paddingTop: 50,
          gap: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ color: "#FFFFFF", fontSize: 20 }}>Logo</Text>
          <View>
            <TouchableOpacity
              style={{
                paddingHorizontal: 8,
                paddingVertical: 2,
                borderColor: "#FFFFFF",
                borderWidth: 0.5,
                justifyContent: "center",
                borderRadius: 20,
              }}
            >
              <Text
                style={{
                  color: "#FFFFFF",
                }}
              >
                Emergency
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text
          style={{
            color: "#FFFFFF",
            fontSize: 12,
            fontWeight: "300",
          }}
        >
          lorem-somthing
        </Text>
        <Text
          style={{
            color: "#FFFFFF",
            fontSize: 14,
          }}
        >
          Is Your Digital Account{"\n"}Secure?
        </Text>
        <TouchableOpacity
          style={{
            width: screenWidth / 4,
            padding: 10,
            backgroundColor: "#FFFFFF",
            borderRadius: 10,
          }}
        >
          <Text style={{ textAlign: "center", color: "#000000", fontSize: 12 }}>
            Check now
          </Text>
        </TouchableOpacity>
      </View>
    </GestureHandlerRootView>
  );
}
