import { Stack } from "expo-router";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";
import {
  AmaticSC_400Regular,
  AmaticSC_700Bold,
} from "@expo-google-fonts/amatic-sc";
import * as SplashScreen from "expo-splash-screen";

import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  let [fonstLoaded, fontsError] = useFonts({
    Inter: Inter_900Black,
    AmaticRegular: AmaticSC_400Regular,
    AmaticBold: AmaticSC_700Bold,
  });

  useEffect(() => {
    if (fonstLoaded || fontsError) {
      SplashScreen.hideAsync();
    }
  }, [fontsError, fonstLoaded]);

  if (!fonstLoaded && !fontsError) {
    return null;
  }
  return (
    <Stack screenOptions={{}}>
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
  );
}
