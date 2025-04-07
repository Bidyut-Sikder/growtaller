import BannerAds from "@/components/BannerAds";
import Home from "@/components/Home";

import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

const FlatListBasics = () => {
  return (
    <View style={styles.container}>
      <Home />
      <BannerAds />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 3,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
export default FlatListBasics;
