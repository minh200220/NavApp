//import liraries
import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

// create a component
const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Home screen</Text>
      <Button title="About" onPress={() => navigation.navigate("About")} />
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
export default Home;
