import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import Icon from "react-native-vector-icons/Ionicons";
const MainStack = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          backgroundColor: "#FFFFFF",
          borderTopWidth: 0,
          paddingBottom: 5,
          height: 80,
        },
        tabBarActiveTintColor: "#000000",
        tabBarInactiveTintColor: "gray",
        tabBarLabelStyle: {
          fontWeight: "bold",
          paddingBottom: 6,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            // <Image
            //   style={{ tintColor: focused ? "black" : "gray" }}
            //   source={require("../../assets/images/HomeIcon.png")}
            // />
            <Icon
              name="home-outline"
              size={30}
              color={focused ? "black" : "gray"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Discover"
        options={{
          title: "Discover",
          tabBarIcon: ({ focused }) => (
            // <Image
            //   style={{ tintColor: focused ? "black" : "gray" }}
            //   source={require("../../assets/images/DiscoverIcon.png")}
            // />
            <Icon
              name="home-outline"
              size={30}
              color={focused ? "black" : "gray"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="My_Policy"
        options={{
          title: "My Policy",
          tabBarIcon: ({ focused }) => (
            <Icon
              name="home-outline"
              size={30}
              color={focused ? "black" : "gray"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <Icon
              name="home-outline"
              size={30}
              color={focused ? "black" : "gray"}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default MainStack;
