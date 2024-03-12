import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, Stack } from "expo-router";

Stack;
const index = () => {
  return (
    <SafeAreaView edges={["bottom"]} style={{ flex: 1 }}>
      <Stack.Screen options={{ title: "part 4: Animation Splash Screen" }} />
      <View style={styles.page}>
        <View style={styles.description}>
          <Text style={styles.text}>Animated splash screen</Text>
        </View>
      </View>
      <Link href={"/part4/animation"} asChild>
        <Button title="go to the animation" />
      </Link>
      <Link href={"/part4/splash"} asChild>
        <Button title="go to the splash" />
      </Link>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "red",
  },
  description: {
    padding: 20,
    flex: 1,
    backgroundColor: "white",
  },
  text: {
    fontSize: 40,
  },
});
