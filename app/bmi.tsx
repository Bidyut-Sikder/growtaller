import React from "react";
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Image } from "expo-image";
import { bmi_exercises } from "@/constants/data";
import { Link, useRouter } from "expo-router";
import { FontAwesome5 } from "@expo/vector-icons";
//codemodule
const ExerciseList = () => {
  const router = useRouter();

  const renderItem = ({ item }: any) => {
    return (
      <Link
        href={{
          pathname: "/[id]",
          params: {
            id: item.id,
            tag: "bmi",
          },
        }}
      >
        <View style={styles.itemContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.exerciseName}>{item.name}</Text>
            <Text style={styles.exerciseInfo}>{item.repeat}</Text>
            <Text style={styles.exerciseInfo}>{item.duration}</Text>
          </View>
          <View style={styles.imageContainer}>
            <Image source={item.image} style={styles.image} />
            <FontAwesome5
              style={styles.forwordIcon}
              name="arrow-right"
              size={26}
              color="black"
            />
          </View>
        </View>
      </Link>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={bmi_exercises}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <TouchableOpacity
        onPress={() =>
          router.push({
            pathname: "/[id]",
            params: {
              id: bmi_exercises[0].id,
              tag: "bmi",
            },
          })
        }
        style={styles.floatingButton}
      >
        <Text style={styles.buttonText}>Start Workout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  forwordIcon: {
    marginLeft: 10,
    fontSize: 15,
    color: "#007074",
  },
  imageContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  itemContainer: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    borderRadius: 10,
    marginVertical: 5,
    backgroundColor: "#fff",
    margin: 5,
  },
  textContainer: {
    flex: 1,
    marginRight: 10,
  },
  exerciseName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  exerciseInfo: {
    fontSize: 14,
    color: "#555",
  },
  image: {
    width: 50,
    height: 50,
  },
  floatingButton: {
    position: "absolute",
    bottom: 20,

    alignSelf: "center",
    backgroundColor: "#E83F25",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    elevation: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ExerciseList;

///////////////////////////////////
// import React from "react";
// import { FlatList, Text, View, StyleSheet } from "react-native";
// import { Image } from "expo-image";
// import { bmi_exercises } from "@/constants/data";
// import { Link } from "expo-router";
// import { FontAwesome5 } from "@expo/vector-icons";
// // Example data for exercises
// // const exercises = [
// //   {
// //     id: "1",
// //     name: "Leg Lift",
// //     repeat: "15 reps",
// //     duration: "30 seconds",
// //     image: require("../assets/bmi/0(2).gif"),
// //   },
// //   {
// //     id: "2",
// //     name: "Tabletop Toe Touch",
// //     repeat: "20 reps",
// //     duration: "40 seconds",
// //     image: require("../assets/bmi/Sit-Up.gif"),
// //   },

// //   {
// //     id: "3",
// //     name: "Push-Up",
// //     repeat: "12 reps",
// //     duration: "30 seconds",
// //     image: require("../assets/bmi/sport.gif"),
// //   },
// // ];

// const ExerciseList = () => {
//   const renderItem = ({ item }: any) => {
//     return (
//       <Link href={item.id}>
//         <View style={styles.itemContainer}>
//           <View style={styles.textContainer}>
//             <Text style={styles.exerciseName}>{item.name}</Text>
//             <Text style={styles.exerciseInfo}>{item.repeat}</Text>
//             <Text style={styles.exerciseInfo}>{item.duration}</Text>
//           </View>

//           {/* <Image source={item.image} style={styles.image} />

//           <FontAwesome5 style={styles.forwordIcon} name="arrow-right" size={26} color="black" />
//             */}
//           {/* <Image source={259} style={styles.image} /> */}

//           <View style={styles.imageContainer}>
//             <Image source={item.image} style={styles.image} />
//             <FontAwesome5
//               style={styles.forwordIcon}
//               name="arrow-right"
//               size={26}
//               color="black"
//             />
//           </View>
//         </View>
//       </Link>
//     );
//   };

//   return (
//     <>
//       <FlatList
//         data={bmi_exercises}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id}
//       />
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   forwordIcon: {
//     marginLeft: 10,
//     fontSize: 15,
//     color: "#007074",
//   },
//   imageContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   itemContainer: {
//     flexDirection: "row",
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: "#ccc",
//     borderRadius: 10,
//     marginVertical: 5,
//     backgroundColor: "#fff",
//     margin: 5,
//   },
//   textContainer: {
//     flex: 1,
//     marginRight: 10,
//   },
//   exerciseName: {
//     fontSize: 18,
//     fontWeight: "bold",
//   },
//   exerciseInfo: {
//     fontSize: 14,
//     color: "#555",
//   },
//   image: {
//     width: 50,
//     height: 50,
//   },
// });

// export default ExerciseList;
