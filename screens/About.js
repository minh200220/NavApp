//import liraries
import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

// create a component
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

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});

//make this component available to the app
export default About;
