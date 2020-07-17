import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const About = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>About</Text>
      <Button
        title="Go to About... again"
        onPress={() => navigation.push("About")}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});

export default About;
