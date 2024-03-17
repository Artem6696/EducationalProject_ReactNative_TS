import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, View } from "react-native";
import PartListItem from "@components/core/PartListItem";

const data = [ ...Array(20) ].map((value, ind) => ind + 1);
export default function App() {
    return (
        <View style={styles.container}>
            <StatusBar hidden={true}/>
            <FlatList
                contentContainerStyle={styles.content}
                data={data}
                numColumns={2}
                columnWrapperStyle={styles.column}
                renderItem={({ item }) => <PartListItem part={item}/>}
            />
            {/* <OnBoarding /> */}
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
