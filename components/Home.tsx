import { useRouter } from "expo-router";
import React from "react";
import { Image } from "expo-image";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const data = [
  {
    id: "1",
    title: "Height Increase Exercise",
    timeLine: "Grow in 30 Days",
    dailyWorkout: "Every Day 25 MIN",
    suitable: "For All Age",
    category: "Male & Female",
    route: "height",
    image: require("../assets/height/Triangle Pose.webp"),
  },
  {
    id: "2",
    title: "Full Body Exercise",
    timeLine: "Minimum in 60 Days",
    dailyWorkout: "Every Day 20 MIN",
    suitable: "For All Age",
    category: "BMI",
    route: "bmi",
    image: require("../assets/bmi/Jumping Jacks.gif"),
  },
];

const App = () => {
  const router = useRouter();

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.contentContainer}>
              <View style={styles.textContainer}>
                <Text style={styles.category}>{item.category}</Text>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.timeLine}>{item.timeLine}</Text>
                <Text style={styles.text}>{item.dailyWorkout}</Text>
                <Text style={styles.text}>{item.suitable}</Text>
              </View>
              <Image source={item.image} style={styles.image} />
            </View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                if (item.route === "height" || item.route === "bmi") {
                  router.push(`/${item.route}`);
                } else {
                  console.error("Invalid route:", item.route);
                }
              }}
            >
              <FontAwesome5
                name="unlock-alt"
                size={18}
                color="#fff"
                style={styles.icon}
              />
              <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     padding: 10,
//   },
//   card: {
//     backgroundColor: "#f8f9fa",
//     padding: 20,
//     borderRadius: 10,
//     marginBottom: 10,
//     shadowColor: "#000",
//     shadowOpacity: 0.1,
//     shadowOffset: { width: 0, height: 2 },
//     shadowRadius: 4,
//     elevation: 3,
//     position: "relative",
//   },
//   category: {
//     fontSize: 16,
//     fontWeight: "bold",
//     color: "red",
//     position: "absolute",
//     top: 10,
//     left: 10,
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginBottom: 5,
//     color: "#333",
//     marginTop: 20, // To avoid overlap with category
//   },
//   text: {
//     fontSize: 14,
//     color: "#555",
//   },
//   button: {
//     marginTop: 10,
//     backgroundColor: "#E83F25",
//     padding: 10,
//     borderRadius: 5,
//     alignItems: "center",
//     flexDirection: "row",
//     justifyContent: "center",
//   },
//   icon: {
//     marginRight: 8,
//   },
//   buttonText: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
//   image: {
//     width: 80, // Adjust width as needed
//     height: 80, // Adjust height as needed
//     alignSelf: "center",
//     marginBottom: 10, // Adds space between image & button
//   },
// });
const styles = StyleSheet.create({
  card: {
    flexDirection: "column",
    padding: 14,
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 3,
    marginBottom: 16,
  },
  contentContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textContainer: {
    flex: 1,
    marginRight: 16,
  },
  timeLine: {
    fontSize: 18,
    fontWeight: "400",
    color: "gray",
  },
  category: {
    fontSize: 16,
    fontWeight: "bold",
    color: "red",
    paddingBottom: 6,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    padding: 5,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 7,
    paddingLeft: 6,
  },
  text: {
    fontSize: 14,
    color: "#555",
    marginBottom: 4,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  button1: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#007bff",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginTop: 16,
  },
  icon: {
    marginRight: 8,
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
  },
  button: {
    marginTop: 10,
    backgroundColor: "#E83F25",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default App;