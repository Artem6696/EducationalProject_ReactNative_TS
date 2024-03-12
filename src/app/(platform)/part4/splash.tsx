import { StyleSheet, Text, View, Button } from "react-native";
import React, { useRef } from "react";
import LottieView from "lottie-react-native";
import { Stack } from "expo-router";
import Animated, {
  FadeIn,
  FadeOut,
  ZoomIn,
  ZoomOut,
} from "react-native-reanimated";

const AnimatedLottieView = Animated.createAnimatedComponent(LottieView);
const Splash = ({
  onAnimationFinish,
}: {
  onAnimationFinish: (isCancelled: boolean) => void;
}) => {
  const animation = useRef<LottieView>(null);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
      }}
    >
      <Stack.Screen />
      <AnimatedLottieView
        exiting={ZoomOut}
        autoPlay
        loop={false}
        onAnimationFinish={onAnimationFinish}
        ref={animation}
        style={{
          width: "100%",
          height: "100%",
          //   backgroundColor: "#eee", можно поменять цвет фона
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require("@assets/lottie/netflix.json")}
      />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({});
