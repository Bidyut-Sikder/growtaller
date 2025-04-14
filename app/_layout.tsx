import { useFonts } from "expo-font";
import { Stack, useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";

import { Ionicons, FontAwesome5 } from "@expo/vector-icons"; // Ensure you have @expo/vector-icons installed
import { TouchableOpacity, View } from "react-native";
import { interstitial } from "@/components/InterstitialAds";
// import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const router = useRouter();

  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
    interstitial.load();
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <>
      <StatusBar style="auto" />

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
                    router.push("/premium");
                    console.log("Premium Pressed");
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
        <Stack.Screen
          name="customer-support"
          options={{ title: "Custormer Support" }}
        />
        <Stack.Screen
          name="premium"
          options={{
            title: "",

            headerLeft: () => (
              <TouchableOpacity onPress={() => router.back()}>
                <Ionicons name="close" size={30} color="white" />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen name="+not-found" />
      </Stack>
    </>
  );
}


// import { Stack } from 'expo-router';
// import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

// export default function Layout() {
//   return (
//     <SafeAreaProvider>
//       <SafeAreaView style={{ flex: 1 }}>
//         <Stack />
//       </SafeAreaView>
//     </SafeAreaProvider>
//   );
// }

