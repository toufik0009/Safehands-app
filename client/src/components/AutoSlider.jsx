import React, { useState } from "react";
import {
  View,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

const { width: screenWidth } = Dimensions.get("window");

const images = [
  { image: require("../assets/images/CarouselImage1.png") },
  { image: require("../assets/images/CarouselImage1.png") },
  { image: require("../assets/images/CarouselImage1.png") },
  { image: require("../assets/images/CarouselImage1.png") },
];

const AutoSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const Pagination = ({ currentIndex }) => {
    return (
      <View style={styles.paginationContainer}>
        {images.map((_, index) => {
          const animatedStyle = useAnimatedStyle(() => {
            const scale = withTiming(currentIndex === index ? 1.2 : 1, {
              duration: 300,
            });
            const opacity = withTiming(currentIndex === index ? 1 : 0.5, {
              duration: 300,
            });

            return {
              transform: [{ scale }],
              opacity,
            };
          });

          return (
            <Animated.View
              key={index}
              style={[
                styles.dot,
                animatedStyle,
                currentIndex === index ? styles.activeDot : styles.inactiveDot,
              ]}
            />
          );
        })}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        width={screenWidth}
        height={screenWidth * 0.8}
        data={images}
        autoPlay
        autoPlayInterval={3000}
        // scrollEnabled={true}
        pagingEnabled={true}
        onSnapToItem={(index) => setActiveIndex(index)}
        renderItem={({ item }) => (
          <View style={styles.slide}>
            <Image source={item.image} style={styles.image} />
          </View>
        )}
      />
      <View style={styles.paginationWrapper}>
        {/* <View
          style={{
            width: screenWidth,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ color: "#FFFFFF" }}>Logo</Text>
          <TouchableOpacity
            style={{
              paddingHorizontal: 5,
              borderColor: "#FFFFFF",
              borderWidth: 0.5,
            }}
          >
            <Text style={{ color: "#FFFFFF" }}>Emergency</Text>
          </TouchableOpacity>
        </View> */}
        <Pagination currentIndex={activeIndex} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slide: {
    width: screenWidth,
    height: screenWidth * 0.8,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  paginationWrapper: {
    flexDirection: "row",
    position: "absolute",
    left: 10,
    top: 10,
  },
  paginationContainer: {
    flexDirection: "row",
    marginVertical: 10,
    top: screenWidth * 0.6,
    left: 20,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 2,
  },
  activeDot: {
    backgroundColor: "#ffffff",
  },
  inactiveDot: {
    backgroundColor: "gray",
  },
});

export default AutoSlider;
