import { bmi_exercises, height_exercises } from "@/constants/data";
import { useLocalSearchParams, Stack } from "expo-router";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Image } from "expo-image";
import { AdEventType } from "react-native-google-mobile-ads";
import { interstitial } from "@/components/InterstitialAds";
import BannerAds from "@/components/BannerAds";

const Id = () => {
  const { id, tag } = useLocalSearchParams();
  const [currentId, setCurrentId] = useState(id);
  const [data, setData] = useState<{
    id: string;
    name: string;
    image: string;
  } | null>(null);
  const [nextExercise, setNextExercise] = useState<{
    id: string;
    name: string;
    repeat: string;
    duration: string;
    image: any;
  } | null>({
    id: "",
    name: "",
    repeat: "",
    duration: "",
    image: "",
  });
  const [time, setTime] = useState(60);
  const [isRunning, setIsRunning] = useState(false);

  // Fetch the correct exercise based on `currentId` and `tag`
  useEffect(() => {
    let exerciseList = tag === "bmi" ? bmi_exercises : height_exercises;
    const clickedData = exerciseList.find((item) => item.id === currentId);

    if (clickedData) {
      setData(clickedData);
      const currentIndex = exerciseList.findIndex(
        (item) => item.id === currentId
      );
      setNextExercise(exerciseList[currentIndex + 1] || null);
    } else {
      setData(null);
    }
  }, [currentId, tag]);

  // Countdown effect
  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;
    if (isRunning && time > 0) {
      timer = setTimeout(() => setTime(time - 1), 1000);
    }
    return () => clearTimeout(timer as NodeJS.Timeout);
  }, [isRunning, time]);

  // Reset timer
  const resetTimer = () => {
    setTime(60);
    setIsRunning(false);
  };

  // Handle next exercise
  interface NextHandlerParams {
    id: string;
  }

  const nextHandler = (id: NextHandlerParams["id"]) => {
    setCurrentId(id);
    setTime(60);
    setIsRunning(false);
  };

  // Show interstitial ad when no more exercises
  const [loaded, setLoaded] = useState(false);

  console.log(nextExercise);
  useEffect(() => {
    const unsubscribeLoaded = interstitial.addAdEventListener(
      AdEventType.LOADED,
      () => {
        setLoaded(true);
      }
    );

    if (nextExercise === null) {
      interstitial.show();
    }

    return () => {
      unsubscribeLoaded();
      interstitial.load()
    };
  }, [nextExercise]);
  // No advert ready to show yet
  // if (!loaded) {
  //   return null;
  // }
  return (
    <>
      {data && <Stack.Screen options={{ title: data.name }} />}
      <ScrollView contentContainerStyle={styles.container}>
        {/* Timer */}
        <View style={styles.clock}>
          <Text style={styles.clockTimer}>
            {time === 60 ? "1.00" : `00.${time}`}
          </Text>
        </View>

        {/* Exercise Image */}
        {data ? (
          <Image source={data.image} style={styles.image} />
        ) : (
          <Text style={styles.errorText}>Exercise not found</Text>
        )}

        {/* Button Container */}
        <View style={styles.buttonContainer}>
          {/* Start/Pause Button */}
          <TouchableOpacity
            style={styles.startButton}
            onPress={() => setIsRunning(!isRunning)}
          >
            <Text style={styles.buttonText}>
              {isRunning ? "Pause" : "Start"}
            </Text>
          </TouchableOpacity>

          {/* Reset Button */}
          <TouchableOpacity
            style={[
              styles.resetButton,
              { opacity: isRunning || time === 60 ? 0 : 1 },
            ]}
            onPress={resetTimer}
            disabled={isRunning || time === 60}
          >
            <Text style={styles.buttonText}>Reset</Text>
          </TouchableOpacity>

          {/* Next Exercise Button */}
          {nextExercise ? (
            <TouchableOpacity
              style={styles.nextButton}
              onPress={() => nextHandler(nextExercise.id)}
            >
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          ) : (
            <Text style={styles.noMoreText}>No more exercises!</Text>
          )}
        </View>
      </ScrollView>
      <BannerAds />
    </>
  );
};

// Styles
const styles = StyleSheet.create({
  clock: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    borderWidth: 5,
    borderColor: "#007bff",
    marginBottom: 10,
  },
  clockTimer: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f4f4f4",
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonContainer: {
    width: "90%",
    alignItems: "center",
    justifyContent: "space-between",
    height: 120, // Set fixed height to prevent layout shift
  },
  startButton: {
    backgroundColor: "#dc3545",
    padding: 5,
    borderRadius: 10,
    width: "90%",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
  },
  resetButton: {
    backgroundColor: "#dc3545",
    padding: 5,
    borderRadius: 10,
    width: "90%",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  nextButton: {
    marginTop: 5,
    backgroundColor: "#dc3545",
    padding: 5,
    borderRadius: 10,
    width: "90%",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
  noMoreText: {
    fontSize: 18,
    color: "#666",
    marginTop: 10,
    textAlign: "center",
  },
  errorText: {
    fontSize: 20,
    color: "red",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Id;

////////////////////
// import { bmi_exercises } from "@/constants/data";
// import { useLocalSearchParams ,Stack} from "expo-router";
// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   TouchableOpacity,
// } from "react-native";
// import { Image } from "expo-image";

// const Id = () => {
//   const { id ,tag} = useLocalSearchParams();

//   const [currentId, setCurrentId] = useState(id);

//   // Find the current exercise based on currentId
//   const clickedData = bmi_exercises.find((item) => item.id === currentId);
//   if (!clickedData)
//     return <Text style={styles.errorText}>Exercise not found</Text>;

//   const { image,name } = clickedData;

//   // Find current index and next exercise
//   const currentIndex = bmi_exercises.findIndex((item) => item.id === currentId);
//   const nextExercise = bmi_exercises[currentIndex + 1];

//   // Timer state
//   const [time, setTime] = useState(60);
//   const [isRunning, setIsRunning] = useState(false);

//   // Countdown effect
//   useEffect(() => {
//     let timer: NodeJS.Timeout;
//     if (isRunning && time > 0) {
//       timer = setTimeout(() => setTime(time - 1), 1000);
//     }
//     return () => clearTimeout(timer);
//   }, [isRunning, time]);

//   // Reset timer
//   const resetTimer = () => {
//     setTime(60);
//     setIsRunning(false);
//   };

//   // Handle next exercise
//   const nextHandler = (id: any) => {
//     setCurrentId(id);
//     setTime(60);
//     setIsRunning(false);
//   };

//   return (
//     <>
//     <Stack.Screen options={{ title: name }} />
//     <ScrollView contentContainerStyle={styles.container}>
//       {/* Timer */}
//       <View style={styles.clock}>
//         <Text style={styles.clockTimer}>
//           {time === 60 ? "1.00" : `00.${time}`}
//         </Text>
//       </View>

//       {/* Exercise Image */}
//       <Image source={image} style={styles.image} />

//       {/* Button Container to prevent layout shift */}
//       <View style={styles.buttonContainer}>
//         {/* Start/Pause Button */}
//         <TouchableOpacity
//           style={styles.startButton}
//           onPress={() => setIsRunning(!isRunning)}
//         >
//           <Text style={styles.buttonText}>{isRunning ? "Pause" : "Start"}</Text>
//         </TouchableOpacity>

//         {/* Reset Button (Uses opacity instead of conditional rendering) */}
//         <TouchableOpacity
//           style={[
//             styles.resetButton,
//             { opacity: isRunning || time === 60 ? 0 : 1 },
//           ]}
//           onPress={resetTimer}
//           disabled={isRunning || time === 60}
//         >
//           <Text style={styles.buttonText}>Reset</Text>
//         </TouchableOpacity>

//         {/* Next Exercise Button */}
//         {nextExercise ? (
//           <TouchableOpacity
//             style={styles.nextButton}
//             onPress={() => nextHandler(nextExercise.id)}
//           >
//             <Text style={styles.buttonText}>Next</Text>
//           </TouchableOpacity>
//         ) : (
//           <Text style={styles.noMoreText}>No more exercises!</Text>
//         )}
//       </View>
//     </ScrollView>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   clock: {
//     width: 120,
//     height: 120,
//     borderRadius: 60,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 4,
//     elevation: 5,
//     borderWidth: 5,
//     borderColor: "#007bff",
//     marginBottom: 10,
//   },
//   clockTimer: {
//     fontSize: 28,
//     fontWeight: "bold",
//     color: "#333",
//   },
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "#f4f4f4",
//     padding: 20,
//   },
//   image: {
//     width: 200,
//     height: 200,
//     borderRadius: 10,
//     marginBottom: 20,
//   },
//   buttonContainer: {
//     width: "90%",
//     alignItems: "center",
//     justifyContent: "space-between",
//     height: 120, // Set fixed height to prevent layout shift
//   },
//   startButton: {
//     backgroundColor: "#dc3545",
//     padding: 5,
//     borderRadius: 10,
//     width: "90%",
//     height: 40,
//     alignItems: "center",
//     justifyContent: "center",
//     marginBottom: 5,
//   },
//   resetButton: {
//     backgroundColor: "#dc3545",
//     padding: 5,
//     borderRadius: 10,
//     width: "90%",
//     height: 40,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   nextButton: {
//     marginTop: 5,
//     backgroundColor: "#dc3545",
//     padding: 5,
//     borderRadius: 10,
//     width: "90%",
//     height: 40,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   buttonText: {
//     fontSize: 18,
//     color: "#fff",
//     fontWeight: "bold",
//   },
//   noMoreText: {
//     fontSize: 18,
//     color: "#666",
//     marginTop: 10,
//     textAlign: "center",
//   },
//   errorText: {
//     fontSize: 20,
//     color: "red",
//     fontWeight: "bold",
//     textAlign: "center",
//   },
// });

// export default Id;
