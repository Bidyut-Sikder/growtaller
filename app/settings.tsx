/////////////////////////////////

import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Share,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import StarRatingModal from "@/components/Ratings";

import { settingsData } from "@/constants/data";

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
  const [showModal, setShowModal] = useState(false);
  const navigation = useNavigation();

  const handlePress = async (link: string) => {
    if (link.startsWith("http")) {
      Linking.openURL(link);
    } else if (link === "share") {
      handleShare();
    } else if (link === "rating") {
      setShowModal(true);
      // console.log(link)
      // return <StarRatingModal show/>;
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
      Alert.alert("Error sharing", error as any);
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
      {showModal && (
        <StarRatingModal
          onSubmit={() => {
            navigation.navigate("customer-support" as never);
          }}
          onClose={() => setShowModal(false)}
          visible={showModal}
        />
      )}
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
