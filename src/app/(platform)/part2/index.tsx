import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";

export default function Application1DetailsScreen() {
  return (
    <View>
      <Stack.Screen options={{ title: "part 2" }} />
      <Text style={{ fontFamily: "AmaticBold", fontSize: 50 }}>
        Application_1DetailsScreen
      </Text>
      <Link href="part2/onboarding" asChild>
        <Button  title="onBoard"/>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({});
