import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View } from "react-native";
import DayListItem from "./src/components/core/DayListItem";

const data = [...Array(20)].map((value, ind) => ind + 1);
export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.content}
        data={data}
        numColumns={2}
        columnWrapperStyle={styles.column}
        renderItem={({ item }) => (
          <DayListItem day={item}/>
        )}
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
