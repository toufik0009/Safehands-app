import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
const MyPolicyCard = ({ image, name, about }) => {
  return (
    <View style={{}}>
      <View style={styles.cardIndividual}>
        <View style={styles.cardIndividualLeft}>
          <Image source={image} style={styles.imageCard} />
        </View>
        <View style={styles.cardIndividualMiddle}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.about}>{about}</Text>
        </View>
        <View style={styles.cardIndividualRight}>
          <TouchableOpacity style={styles.cardIndividualRightBtn}>
            <Icon name="chevron-forward-outline" size={30} color={"#000000"} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default MyPolicyCard;

const styles = StyleSheet.create({
  cardIndividual: {
    width: "100%",
    marginVertical: 3,
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: "#fff",
    alignSelf: "center",
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: "#BDBEBF",
    flexDirection: "row",
  },
  cardIndividualLeft: {
    width: "20%",
    justifyContent: "center",
    alignItems: "center",
  },
  cardIndividualMiddle: {
    width: "60%",
    justifyContent: "center",
    marginLeft: 10,
  },
  name: {
    fontSize: 14,
    color: "#000",
    fontWeight: "500",
  },
  cardIndividualRight: {
    width: "20%",
    justifyContent: "center",
    alignItems: "center",
  },

  nameCard: {
    fontSize: 16,
    color: "#000",
    fontWeight: "bold",
  },
  about: {
    fontSize: 12,
    color: "#000",
    fontWeight: "300",
  },
  imageCard: {},
  cardIndividualRightBtn: {
    alignItems: "center",
    justifyContent: "center",
  },
  arrow: {},
});
