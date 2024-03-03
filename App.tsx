import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from "react-native";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";
import {AmaticSC_400Regular ,AmaticSC_700Bold} from "@expo-google-fonts/amatic-sc"
import * as SplashScreen from 'expo-splash-screen';
import DayListItem from "./src/components/core/DayListItem";

SplashScreen.preventAutoHideAsync();

const data = [...Array(20)].map((value, ind) => ind + 1);

export default function App() {
  let [fonstLoaded, fontsError] = useFonts({
    Inter: Inter_900Black ,
    AmaticRegular: AmaticSC_400Regular,
    AmaticBold: AmaticSC_700Bold

  });

  if (!fonstLoaded && !fontsError) {
    return <ActivityIndicator/>;
  }

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.content}
        data={data}
        numColumns={2}
        columnWrapperStyle={styles.column}
        renderItem={({ item }) => <DayListItem day={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  column: {
    gap: 10,
  },
  content: {
    gap: 10,
    padding: 10,
  },
});
