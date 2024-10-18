import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const PolicyCard = () => {
  return (
    <View
      style={{
        backgroundColor: "#4BA4F8",
        borderRadius: 20,
        marginVertical: 15,
        padding: 15,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingTop: 20,
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 14,
              color: "#FFFFFF",
              fontWeight: "600",
            }}
          >
            My Policy
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: "#FFFFFF",
              fontWeight: "300",
            }}
          >
            1 Active
          </Text>
        </View>
        <View>
          <TouchableOpacity
            style={{
              backgroundColor: "#FFFFFF",

              paddingHorizontal: 10,
              paddingVertical: 5,
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                fontSize: 14,
                color: "#4BA4F8",
                fontWeight: "600",
              }}
            >
              View all
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingTop: 20,
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 14,
              color: "#FFFFFF",
              fontWeight: "500",
            }}
          >
            Health
          </Text>
          <Text
            style={{
              fontSize: 28,
              color: "#FFFFFF",
              fontWeight: "500",
            }}
          >
            00
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontSize: 12,
              color: "#FFFFFF",
              fontWeight: "500",
            }}
          >
            Motor
          </Text>
          <Text
            style={{
              fontSize: 28,
              color: "#FFFFFF",
              fontWeight: "500",
            }}
          >
            00
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontSize: 14,
              color: "#FFFFFF",
              fontWeight: "600",
            }}
          >
            Others
          </Text>
          <Text
            style={{
              fontSize: 28,
              color: "#FFFFFF",
              fontWeight: "500",
            }}
          >
            00
          </Text>
        </View>
      </View>
    </View>
  );
};

export default PolicyCard;

const styles = StyleSheet.create({});
