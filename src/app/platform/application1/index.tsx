import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
export default function Application1DetailsScreen() {
  return (
    <View>
       <Stack.Screen options={{ title: "part 1" }} />
      <Text>Application_1DetailsScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
