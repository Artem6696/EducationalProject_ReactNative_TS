import {Button, StyleSheet, Text, View} from "react-native";
import React from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import {Link, Stack} from "expo-router";

const index = () => {
    return (
        <SafeAreaView edges={["bottom"]} style={{flex: 1}}>
            <Stack.Screen options={{title: "part 6: Tinder"}}/>
            <View style={styles.page}>
                <View style={styles.description}>
                    <Text style={styles.text}>Tinder app</Text>
                </View>
            </View>

            <Link href={"/part6/tinder"} asChild>
                <Button title="go to TINDER "/>
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
