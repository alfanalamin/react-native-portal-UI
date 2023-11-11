// Navbar.js
import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const Navbar = ({ navigation }) => {
  return (
    <View style={styles.navbar}>
      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.buttonText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate("About")}
      >
        <Text style={styles.buttonText}>About</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate("Contact")}
      >
        <Text style={styles.buttonText}>Contact</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#3498db",
    padding: 10,
  },
  navButton: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#ffffff",
  },
  buttonText: {
    color: "#3498db",
    fontWeight: "bold",
  },
});

export default Navbar;
