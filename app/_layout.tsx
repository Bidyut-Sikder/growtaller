import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack, useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons"; // Ensure you have @expo/vector-icons installed

import { useColorScheme } from "@/hooks/useColorScheme";
import { TouchableOpacity, View } from "react-native";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const router = useRouter();
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <>
        <Stack
          screenOptions={{
            headerStyle: {
              backgroundColor: "#f4511e",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        >
          <Stack.Screen
            name="index"
            options={{
              headerShown: true,
              title: "Grow Taller",
              headerRight: () => (
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginRight: 15,
                  }}
                >
                  <TouchableOpacity
                    onPress={() => {
                      console.log("Crown Pressed");
                    }}
                    style={{ marginRight: 15 }}
                  >
                    <FontAwesome5 name="crown" size={24} color="gold" />
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => {
                      router.push("/settings");
                      console.log("Settings Pressed");
                    }}
                  >
                    <Ionicons name="settings-outline" size={24} color="black" />
                  </TouchableOpacity>
                </View>
              ),
            }}
          />

          <Stack.Screen
            name="bmi"
            options={{ title: "BMI Full Body Exercise" }}
          />
          <Stack.Screen
            name="height"
            options={{ title: "Height Increase Exercise" }}
          />
          <Stack.Screen name="settings" options={{ title: "Settings" }} />
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style="auto" />
      </>
    </ThemeProvider>
  );

  // <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
  //   <Stack
  //     screenOptions={{
  //       headerStyle: {
  //         backgroundColor: "#f4511e",
  //       },
  //       headerTintColor: "#fff",
  //       headerTitleStyle: {
  //         fontWeight: "bold",
  //       },
  //     }}
  //   >
  //     <Stack.Screen
  //       name="index"
  //       options={{
  //         headerShown: true,
  //         title: "Grow Taller",

  //         headerRight: () => (
  //           <View
  //             style={{
  //               flexDirection: "row",
  //               alignItems: "center",
  //               marginRight: 15,
  //             }}
  //           >
  //             {/* Crown Icon */}
  //             <TouchableOpacity
  //               onPress={() => {
  //                 console.log("Crown Pressed");
  //               }}
  //               style={{ marginRight: 15 }}
  //             >
  //               <FontAwesome5 name="crown" size={24} color="gold" />
  //             </TouchableOpacity>

  //             {/* Settings Icon */}
  //             <TouchableOpacity
  //               onPress={() => {
  //                 router.push("/settings");
  //                 console.log("Settings Pressed");
  //               }}
  //             >
  //               <Ionicons name="settings-outline" size={24} color="black" />
  //             </TouchableOpacity>
  //           </View>
  //         ),
  //       }}
  //     />
  //     <Stack.Screen
  //       name="bmi"
  //       options={{ title: "BMI Full Body Exercise" }}
  //     />{" "}
  //     <Stack.Screen
  //       name="height"
  //       options={{ title: "Height Increase Exercise" }}
  //     />
  //     <Stack.Screen name="settings" options={{ title: "Settings" }} />
  //     <Stack.Screen name="+not-found" />
  //   </Stack>
  //   <StatusBar style="auto" />
  // </ThemeProvider>
}

// git status
// On branch master
// Your branch is ahead of 'origin/master' by 2 commits.
//   (use "git push" to publish your local commits)

// nothing to commit, working tree clean when i writ git push
