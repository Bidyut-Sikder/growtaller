/////////////////////////////////

import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Share,Alert
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const settingsData = [
  {
    title: "Remove Ads",
    description: "Remove ads from the app",
    link: "remove-ads", // Internal screen navigation
  },
  {
    title: "Customer Support",
    description: "Tell us what changes you'd like to see, or bugs you've found",
    link: "customer-support", // Internal screen navigation
  },
  {
    title: "Rate Us",
    description: "Do you like the app? Let us know by rating us 5 stars",
    link: "https://www.appstore.com/yourapp", // External link for rating
  },
  {
    title: "Share",
    description: "Do you want to share this app with your friends?",
    link: "share", // This will trigger the sharing functionality
  },
  {
    title: "Privacy Policy",
    description: "Read our privacy policy to know how we use your data",
    link: "https://www.yourwebsite.com/privacy-policy", // External link
  },
  {
    title: "Terms of Service",
    description: "Read the terms and conditions of using this app",
    link: "https://www.yourwebsite.com/terms", // External link
  },
  {
    title: "GrowTaller App",
    description: "Version 1.0.0",
    link: "settings", // Internal navigation, e.g., showing version info
  },
];

const getIcon = (title: string) => {
  switch (title) {
    case "Remove Ads":
      return <Ionicons name="close-circle-outline" size={24} color="black" />;
    case "Customer Support":
      return (
        <Ionicons name="chatbubble-ellipses-outline" size={24} color="black" />
      );
    case "Rate Us":
      return <Ionicons name="star-outline" size={24} color="black" />;
    case "Share":
      return <Ionicons name="share-social-outline" size={24} color="black" />;
    case "Privacy Policy":
      return <Ionicons name="lock-closed-outline" size={24} color="black" />;
    case "Terms of Service":
      return <Ionicons name="document-text-outline" size={24} color="black" />;
    case "GrowTaller App":
      return (
        <Ionicons name="information-circle-outline" size={24} color="black" />
      );
    default:
      return <Ionicons name="settings-outline" size={24} color="black" />;
  }
};

const SettingsScreen = () => {
  const navigation = useNavigation();

  const handlePress = async (link: string) => {
    if (link.startsWith("http")) {
      Linking.openURL(link);
    } else if (link === "share") {
      handleShare()
    } else if (link === "settings") {
      return null;
    } else {
      navigation.navigate(link as never);
    }
  };
const handleShare = async () => {
  try {
    const result = await Share.share({
      message: "This is the text I want to share!", // Replace this with your text
    });

    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        // Shared with activity type of result.activityType
        console.log("Shared with activity type:", result.activityType);
      } else {
        // Shared successfully
        console.log("Shared successfully");
      }
    } else if (result.action === Share.dismissedAction) {
      // Dismissed the share dialog
      console.log("Share dismissed");
    }
  } catch (error) {
    Alert.alert('Error sharing', error as any);
  }
};
  return (
    <View style={styles.container}>
      <FlatList
        data={settingsData}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => handlePress(item.link)}
          >
            <View style={styles.icon}>{getIcon(item.title)}</View>
            <View style={styles.textContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 24,
  },
  icon: {
    marginRight: 12,
    marginTop: 4,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: "#666",
  },
});

/////////////////////////////////////////////

// import React from "react";
// import { View, Text, FlatList, StyleSheet } from "react-native";
// import { Ionicons } from "@expo/vector-icons";

// const getIcon = (title: string) => {
//   switch (title) {
//     case "Remove Ads":
//       return <Ionicons name="close-circle-outline" size={24} color="black" />;
//     case "Customer Support":
//       return (
//         <Ionicons name="chatbubble-ellipses-outline" size={24} color="black" />
//       );
//     case "Rate Us":
//       return <Ionicons name="star-outline" size={24} color="black" />;
//     case "Share":
//       return <Ionicons name="share-social-outline" size={24} color="black" />;
//     case "Privacy Policy":
//       return <Ionicons name="lock-closed-outline" size={24} color="black" />;
//     case "Terms of Service":
//       return <Ionicons name="document-text-outline" size={24} color="black" />;
//     case "GrowTaller App":
//       return (
//         <Ionicons name="information-circle-outline" size={24} color="black" />
//       );
//     default:
//       return <Ionicons name="settings-outline" size={24} color="black" />;
//   }
// };

// const SettingsScreen = () => {
//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={settingsData}
//         keyExtractor={(item) => item.title}
//         renderItem={({ item }) => (
//           <View style={styles.itemContainer}>
//             <View style={styles.icon}>{item.icon}</View>
//             {/* <View style={styles.icon}>{getIcon(item.title)}</View> */}
//             <View style={styles.textContainer}>
//               <Text style={styles.title}>{item.title}</Text>
//               <Text style={styles.description}>{item.description}</Text>
//             </View>
//           </View>
//         )}
//       />
//     </View>
//   );
// };

// export default SettingsScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: "#fff",
//   },
//   itemContainer: {
//     flexDirection: "row",
//     alignItems: "flex-start",
//     marginBottom: 24,
//   },
//   icon: {
//     marginRight: 12,
//     marginTop: 4,
//   },
//   textContainer: {
//     flex: 1,
//   },
//   title: {
//     fontSize: 16,
//     fontWeight: "600",
//     marginBottom: 4,
//   },
//   description: {
//     fontSize: 14,
//     color: "#666",
//   },
// });
// const settingsData = [
//   {
//     title: "Remove Ads",
//     description: "Remove ads from the app",
//     icon: <Ionicons name="close-circle-outline" size={24} color="black" />,
//   },
//   {
//     title: "Customer Support",
//     description: "Tell us what changes you'd like to see, or bugs you've found",
//     icon: (
//       <Ionicons name="chatbubble-ellipses-outline" size={24} color="black" />
//     ),
//   },
//   {
//     title: "Rate Us",
//     description: "Do you like the app? Let us know by rating us 5 stars",
//     icon: <Ionicons name="star-outline" size={24} color="black" />,
//   },
//   {
//     title: "Share",
//     description: "Do you want to share this app with your friends?",
//     icon: <Ionicons name="share-social-outline" size={24} color="black" />,
//   },
//   {
//     title: "Privacy Policy",
//     description: "Read our privacy policy to know how we use your data",
//     icon: <Ionicons name="lock-closed-outline" size={24} color="black" />,
//   },
//   {
//     title: "Terms of Service",
//     description: "Read the terms and conditions of using this app",
//     icon: <Ionicons name="document-text-outline" size={24} color="black" />,
//   },
//   {
//     title: "GrowTaller App",
//     description: "Version 1.0.0",
//     icon: (
//       <Ionicons name="information-circle-outline" size={24} color="black" />
//     ),
//   },
// ];

/////////////////////////////////////

// import React from "react";
// import { View, Text, FlatList, StyleSheet, TouchableOpacity, Linking } from "react-native";
// import { Ionicons } from "@expo/vector-icons";
// import { useNavigation } from "@react-navigation/native";

// const settingsData = [
//   {
//     title: "Remove Ads",
//     description: "Remove ads from the app",
//     link: "remove-ads", // Can be used for internal screen navigation
//   },
//   {
//     title: "Customer Support",
//     description: "Tell us what changes you'd like to see, or bugs you've found",
//     link: "customer-support", // Internal screen navigation
//   },
//   {
//     title: "Rate Us",
//     description: "Do you like the app? Let us know by rating us 5 stars",
//     link: "https://www.appstore.com/yourapp", // External link for rating
//   },
//   {
//     title: "Share",
//     description: "Do you want to share this app with your friends?",
//     link: "share", // Internal screen navigation
//   },
//   {
//     title: "Privacy Policy",
//     description: "Read our privacy policy to know how we use your data",
//     link: "https://www.yourwebsite.com/privacy-policy", // External link
//   },
//   {
//     title: "Terms of Service",
//     description: "Read the terms and conditions of using this app",
//     link: "https://www.yourwebsite.com/terms", // External link
//   },
//   {
//     title: "GrowTaller App",
//     description: "Version 1.0.0",
//     link: "version-info", // Internal navigation, e.g., showing version info
//   },
// ];

// const getIcon = (title: string) => {
//   switch (title) {
//     case "Remove Ads":
//       return <Ionicons name="close-circle-outline" size={24} color="black" />;
//     case "Customer Support":
//       return <Ionicons name="chatbubble-ellipses-outline" size={24} color="black" />;
//     case "Rate Us":
//       return <Ionicons name="star-outline" size={24} color="black" />;
//     case "Share":
//       return <Ionicons name="share-social-outline" size={24} color="black" />;
//     case "Privacy Policy":
//       return <Ionicons name="lock-closed-outline" size={24} color="black" />;
//     case "Terms of Service":
//       return <Ionicons name="document-text-outline" size={24} color="black" />;
//     case "GrowTaller App":
//       return <Ionicons name="information-circle-outline" size={24} color="black" />;
//     default:
//       return <Ionicons name="settings-outline" size={24} color="black" />;
//   }
// };

// const SettingsScreen = () => {
//   const navigation = useNavigation();

//   const handlePress = (link: string) => {
//     if (link.startsWith("http")) {
//       Linking.openURL(link); // For external links
//     } else {
//       navigation.navigate(link as never); // For internal screen navigation
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={settingsData}
//         keyExtractor={(item) => item.title}
//         renderItem={({ item }) => (
//           <TouchableOpacity style={styles.itemContainer} onPress={() => handlePress(item.link)}>
//             <View style={styles.icon}>{getIcon(item.title)}</View>
//             <View style={styles.textContainer}>
//               <Text style={styles.title}>{item.title}</Text>
//               <Text style={styles.description}>{item.description}</Text>
//             </View>
//           </TouchableOpacity>
//         )}
//       />
//     </View>
//   );
// };

// export default SettingsScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: "#fff",
//   },
//   itemContainer: {
//     flexDirection: "row",
//     alignItems: "flex-start",
//     marginBottom: 24,
//   },
//   icon: {
//     marginRight: 12,
//     marginTop: 4,
//   },
//   textContainer: {
//     flex: 1,
//   },
//   title: {
//     fontSize: 16,
//     fontWeight: "600",
//     marginBottom: 4,
//   },
//   description: {
//     fontSize: 14,
//     color: "#666",
//   },
// });
