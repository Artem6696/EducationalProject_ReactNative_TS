import { StyleSheet, Text, View, SafeAreaView, Pressable } from "react-native";
import React, { useState } from "react";
import { Stack, router } from "expo-router";
import { FontAwesome6 } from "@expo/vector-icons";
import {
  GestureDetector,
  Gesture,
  Directions,
} from "react-native-gesture-handler";
const onBoardingStepsData = [
  {
    icon: "people-arrows",
    title: "Track every transaction",
    description:
      "Monitor spending and contribution every penny aligns with your familys aspirations",
  },
  {
    icon: "wave-square",
    title: "Analyze Financial Trends",
    description:
      "Use graphs and charts to analyze your financial habits and make informed decisions.",
  },
  {
    icon: "landmark-flag",
    title: "Set Savings Goals",
    description:
      "Set achievable savings goals and track your progress to financial security.",
  },
];

const onBoarding = () => {
  const [screenIndex, setScreenIndex] = useState(0);

  const data = onBoardingStepsData[screenIndex];

  const onContinue = () => {
    const isLastScreen = screenIndex == onBoardingStepsData.length - 1; //сравнение без приведения типов текущего индекса экрана и длины массива,
    if (isLastScreen) {
      //как только индекс будет равен длине массива вернет true
      endOnBoarding();
    } else {
      setScreenIndex(screenIndex + 1);
    }
  };
  const onBack = () => {
    const isFirstScreen = screenIndex == 0;
    if (isFirstScreen) {
      endOnBoarding()
    } else {
      setScreenIndex( screenIndex - 1)
    }
  };

  const endOnBoarding = () => {
    setScreenIndex(0);
    // router.back()
  };

  const swipeBack = Gesture.Fling()
    .direction(Directions.LEFT)
    .onEnd((e) => {
      console.log("Swipe back");
      onContinue();
    });

  const swipeForward = Gesture.Fling()
    .direction(Directions.RIGHT)
    .onEnd((e) => {
      console.log("Swipe forward ");
      onBack();
    });

  const composed = Gesture.Simultaneous(swipeBack, swipeForward);
  return (
    <SafeAreaView style={styles.page}>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.storiesIndicatorContainer}>
        {onBoardingStepsData.map((item, index) => (
          <View
            key={index}
            style={[
              styles.storiesStep,
              { backgroundColor: index === screenIndex ? "white" : "grey" },
            ]}
          />
        ))}
      </View>
      <GestureDetector gesture={composed}>
        <View style={styles.pageContent}>
          <FontAwesome6
            name={data.icon}
            size={100}
            color="#FFDA11"
            style={styles.image}
          />
          <View style={styles.footer}>
            <Text style={styles.title}>{data.title}</Text>
            <Text style={styles.description}>{data.description}</Text>
            <View style={styles.buttonsRow}>
              <Text style={styles.buttonText}>Skip</Text>
              <Pressable onPress={() => onContinue()} style={styles.button}>
                <Text style={styles.buttonText}>Continue</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </GestureDetector>
    </SafeAreaView>
  );
};

export default onBoarding;

const styles = StyleSheet.create({
  page: {
    justifyContent: "center",
    backgroundColor: "#15141A",
    flex: 1,
  },
  pageContent: {
    padding: 20,
    flex: 1,
  },
  image: {
    alignSelf: "center",
    margin: 20,
    marginTop: 30,
  },

  title: {
    color: "#FDFDFD",
    fontSize: 50,
    letterSpacing: 1.3,
    fontFamily: "Inter",
    marginVertical: 10,
  },
  description: {
    color: "gray",
    fontSize: 20,
    lineHeight: 25,
    fontFamily: "InterRegular",
  },
  footer: {
    marginTop: "auto",
  },

  buttonsRow: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  button: {
    backgroundColor: "#302E38",
    flex: 1,
    borderRadius: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "#FDFDFD",
    padding: 15,
    fontFamily: "InterSemiBold",
    fontSize: 16,
    paddingHorizontal: 25,
  },
  //indicator stories
  storiesIndicatorContainer: {
    paddingTop: 8,
    flexDirection: "row",
    marginHorizontal: 15,
  },
  storiesStep: {
    flex: 1,
    margin: 5,
    height: 3,
    backgroundColor: "grey",
    borderRadius: 10,
  },
});
