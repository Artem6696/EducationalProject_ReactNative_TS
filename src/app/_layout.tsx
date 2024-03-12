import { Stack } from "expo-router";
import {
  useFonts,
  Inter_900Black,
  Inter_600SemiBold,
  Inter_400Regular,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import {
  AmaticSC_400Regular,
  AmaticSC_700Bold,
} from "@expo-google-fonts/amatic-sc";
import * as SplashScreen from "expo-splash-screen";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { useEffect, useState } from "react";
import Splash from "./(platform)/part4/splash";

// SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [appReady, setAppReady] = useState(false);
  const [splashAnimatedFinished, setSplashAnimatedFinished] = useState(false);

  let [fonstLoaded, fontsError] = useFonts({
    Inter: Inter_900Black,
    InterRegular: Inter_400Regular,
    InterSemiBold: Inter_600SemiBold,
    InterBold: Inter_700Bold,
    AmaticRegular: AmaticSC_400Regular,
    AmaticBold: AmaticSC_700Bold,
  });

  useEffect(() => {
    if (fonstLoaded || fontsError) {
      setAppReady(true);
    }
  }, [fontsError, fonstLoaded]);
  
          //пока не загружены шрифты и не закончилась анимация     
  const showAnimatedSplash = !appReady || !splashAnimatedFinished;


  if (showAnimatedSplash) {
    return (
      <Splash
        onAnimationFinish={(isCancelled: boolean) => {
          if (!isCancelled) { // если анимация не была прервана
            setSplashAnimatedFinished(true); //Анимация завершена
          }
        }}
      />
    );
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            title: "collections app",
            headerStyle: {
              backgroundColor: "red",
            },
          }}
        />
      </Stack>
    </GestureHandlerRootView>
  );
}
