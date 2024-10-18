import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
const Card = ({ image, name, about }) => {
  return (
    <View style={{}}>
      <View style={styles.card}>
        <View style={styles.cardLeft}>
          <Image source={image} style={styles.imageCard} />
        </View>
        <View style={styles.cardMiddle}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.about}>{about}</Text>
        </View>
        <View style={styles.cardRight}>
          <TouchableOpacity style={styles.cardIndividualRightBtn}>
            <Text style={styles.textBtn}>Opt In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
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
  cardLeft: {
    width: "20%",
    justifyContent: "center",
    alignItems: "center",
  },
  cardMiddle: {
    width: "60%",
    justifyContent: "center",
    marginLeft: 10,
  },
  name: {
    fontSize: 14,
    color: "#000",
    fontWeight: "500",
  },
  cardRight: {
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
  textBtn: {
    color: "#087CE9",
    fontSize: 12,
  },
});

// import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
// import React from "react";

// const Card = () => {
//   return (
//     <View style={{}}>
//       <TouchableOpacity style={styles.cardIndividual}>
//         <View style={styles.cardIndividualLeft}>
//           <Image
//             source={require("../assets/images/ProfileImage.png")}
//             style={styles.imageCard}
//           />
//         </View>
//         <View style={styles.cardIndividualMiddle}>
//           <Text style={styles.name}>Lorem, ipsum.</Text>
//           <Text style={styles.lastMessege}>Lorem ipsum dolor sit.</Text>
//         </View>
//         <View style={styles.cardIndividualRight}>
//           <TouchableOpacity style={styles.cardIndividualRightBtn}>
//             <Image
//               source={require("../assets/images/ArrowRight.png")}
//               style={styles.arrow}
//             />
//           </TouchableOpacity>
//         </View>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default Card;

// const styles = StyleSheet.create({
//   cardIndividual: {
//     width: "100%",
//     marginVertical: 10,
//     paddingHorizontal: 10,
//     paddingVertical: 15,
//     backgroundColor: "#fff",
//     alignSelf: "center",
//     borderRadius: 15,
//     shadowColor: "#000",
//     elevation: 10,
//     flexDirection: "row",
//   },
//   cardIndividualLeft: {
//     width: "20%",
//   },
//   cardIndividualMiddle: {
//     width: "60%",
//     justifyContent: "center",
//   },
//   cardIndividualRight: {
//     width: "20%",
//     justifyContent: "center",
//   },

//   nameCard: {
//     fontSize: 16,
//     color: "#000",
//     fontWeight: "bold",
//   },
//   lastMessege: {
//     fontSize: 14,
//     color: "#000",
//     fontWeight: "300",
//   },
//   imageCard: {},
//   cardIndividualRightBtn: {
//     width: 30,
//     height: 30,
//     // borderRadius: 15,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   arrow: {},
//   name: {
//     fontSize: 16,
//     color: "#000",
//   },
// });
