//import liraries
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Header } from "react-native-elements";
import Icon from "react-native-vector-icons/Ionicons";

const Support = ({ navigation }) => {
  return (
    <View>
      <Header
        leftComponent={
          <Icon.Button
            name="ios-menu"
            size={25}
            onPress={() => {
              navigation.openDrawer();
            }}
          ></Icon.Button>
        }
        centerComponent={{
          text: "Support",
          style: { color: "#fff", fontWeight: "bold" },
        }}
        rightComponent={{
          icon: "home",
          color: "#fff",
          onPress: () => navigation.navigate("Home"),
        }}
      />
      <Text>Support</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Support;
