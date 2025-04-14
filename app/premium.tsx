import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

import {
  MaterialIcons,
  Ionicons,
  MaterialCommunityIcons,
  Entypo,
  AntDesign,
} from "@expo/vector-icons";

const PricingScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <MaterialCommunityIcons
        style={styles.trophy}
        name="medal-outline"
        size={24}
        color="#F16767"
      />
      {/* <AntDesign style={styles.trophy} name="Trophy" size={24} color="black" /> */}
      <Text style={styles.title}>START LIKE A PRO</Text>
      {/* <Text style={styles.title}>Update Your Plan</Text> */}
      <Text style={styles.titleDesc}>Unlock All Features</Text>

      <View style={styles.table}>
        {/* <View style={styles.table}> */}
        <View style={styles.tableHeader}>
          <Text style={styles.tableHeaderFeatureText}>Feature</Text>
          <Text style={styles.tableHeaderText}>Basic</Text>
          <Text style={styles.tableHeaderText}>Premium</Text>
        </View>

        <View style={styles.tableRow}>
          <MaterialCommunityIcons
            name="human-male-height-variant"
            size={24}
            color="#F16767"
          />

          <Text style={[styles.tableCell, styles.featureCell]}>
            Height Increase Workouts
          </Text>
          <Text style={styles.iconCell}>
            <Ionicons name="checkmark" size={20} color="green" />
          </Text>
          <Text style={styles.iconCell}>
            <Ionicons name="checkmark" size={20} color="green" />
          </Text>
        </View>

        <View style={styles.tableRow}>
          <MaterialCommunityIcons name="dumbbell" size={24} color="#F16767" />
          <Text style={[styles.tableCell, styles.featureCell]}>
            Full Body Trainings
          </Text>
          <Text style={styles.iconCell}>
            <Ionicons name="checkmark" size={20} color="green" />
          </Text>
          <Text style={styles.iconCell}>
            <Ionicons name="checkmark" size={20} color="green" />
          </Text>
        </View>

        <View style={styles.tableRow}>
          <Entypo name="open-book" size={24} color="#F16767" />
          <Text style={[styles.tableCell, styles.featureCell]}>
            Detailed Workout Manual
          </Text>
          <Text style={styles.iconCell}>
            <Ionicons name="checkmark" size={20} color="green" />
          </Text>
          <Text style={styles.iconCell}>
            <Ionicons name="checkmark" size={20} color="green" />
          </Text>
        </View>

        <View style={styles.tableRow}>
          <AntDesign name="customerservice" size={24} color="#F16767" />
          <Text style={[styles.tableCell, styles.featureCell]}>
            VIP Customer Support
          </Text>
          <Text style={styles.iconCell}>
            <Ionicons name="close" size={20} color="red" />
          </Text>
          <Text style={styles.iconCell}>
            <Ionicons name="checkmark" size={20} color="green" />
          </Text>
        </View>

        <View style={styles.tableRow}>
          <MaterialIcons name="tv-off" size={24} color="#F16767" />
          <Text style={[styles.tableCell, styles.featureCell]}>Remove Ads</Text>
          <Text style={styles.iconCell}>
            <Ionicons name="close" size={20} color="red" />
          </Text>
          <Text style={styles.iconCell}>
            <Ionicons name="checkmark" size={20} color="green" />
          </Text>
        </View>
      </View>

      <Text style={styles.trialText}>5-Day Free Trial</Text>
      <Text style={styles.priceText}>Then $10 per month</Text>

      <Text style={styles.description}>
        {/* Enjoy all the premium features of our app with a 5-day free trial. After
        the trial, the price is just $10 per month.  */}
        Subscription is billed after the trial ends and will auto-renew.You can
        cancel your subscription anytime before the trial ends to avoid being
        charged.
      </Text>

      <TouchableOpacity style={styles.trialButton}>
        <Text style={styles.trialButtonText}>Start Free Trial</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 10,
  },
  trophy: {
    fontSize: 30,
    textAlign: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 2,
  },
  titleDesc: {
    fontSize: 18,
    color: "#555",
    textAlign: "center",
    marginBottom: 20,
  },
  table: {
    width: "100%",
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "white",
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#0071FF",
    padding: 10,
  },
  tableHeaderFeatureText: {
    flex: 2, // Feature takes more space
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  tableHeaderText: {
    flex: 1,
    textAlign: "right",
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  tableRow: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  tableCell: {
    fontSize: 15,
    paddingLeft: 10,
    textAlign: "left",
    color: "#333",
  },
  featureCell: {
    flex: 2, // Feature takes more space
  },
  iconCell: {
    width: 52, // Narrower column for icons
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  trialText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#28a745",
    textAlign: "center",
    marginTop: 20,
  },
  priceText: {
    fontSize: 18,
    color: "#dc3545",
    textAlign: "center",
    marginVertical: 10,
  },
  description: {
    fontSize: 13,
    color: "#333",
    textAlign: "center",
    marginVertical: 13,
  },
  trialButton: {
    backgroundColor: "#007BFF",
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: "center",
  },
  trialButtonText: {
    color: "white",
    fontSize: 18,
  },
});

export default PricingScreen;
