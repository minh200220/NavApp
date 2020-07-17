//import liraries
import React from "react";
import { View, Text, StyleSheet, Button, StatusBar } from "react-native";
import { useTheme } from "@react-navigation/native";

const Home = ({ navigation }) => {
  const { colors } = useTheme();
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <StatusBar barStyle={theme.dark ? "light-content" : "dark-content"} />
      <Text style={{ color: colors.text }}>Home screen</Text>
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
  },
});

//make this component available to the app
export default Home;
