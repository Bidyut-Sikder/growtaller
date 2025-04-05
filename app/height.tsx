import React from "react";
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Image } from "expo-image";
import { bmi_exercises, height_exercises } from "@/constants/data";
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
            tag: "height",
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

  const workoutHandler = async () => {
    router.push({
      pathname: "/[id]",
      params: {
        id: height_exercises[0].id,
        tag: "height",
      },
    });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={height_exercises}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

      <TouchableOpacity
        onPress={workoutHandler}
        // onPress={() => router.push(`/${height_exercises[0].id}`)}
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
