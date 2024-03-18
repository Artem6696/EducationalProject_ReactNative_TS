import React from 'react';
import {StyleSheet, View} from "react-native";
import TinderCard from "@components/part6/TinderCard";
import {Stack} from "expo-router";
import {useSharedValue} from "react-native-reanimated";

const users = [
    {
        id: 1,
        image: 'https://cdn1.ntv.com.tr/gorsel/bbL444U01UCiADZC1We92w.jpg?width=1000&mode=both&scale=both&v=1485517870422',
        name: "Larisa",
    },
    {
        id: 2,
        image: 'https://avatars.mds.yandex.net/i?id=9327416777d0aa4c8195e247481775ed_l-5367291-images-thumbs&ref=rim&n=13&w=1080&h=1350',
        name: "Maria",
    },
    {
        id: 3,
        image: 'https://avatars.mds.yandex.net/i?id=401dad2d7b89c5ecc4c9b99128b2dae4_l-5248587-images-thumbs&ref=rim&n=13&w=640&h=640',
        name: "Daria",
    },
    {
        id: 4,
        image: 'https://avatars.mds.yandex.net/i?id=8269eebf7947b0ef093344aaeb6bb74f_l-5225007-images-thumbs&ref=rim&n=13&w=1080&h=1349',
        name: "Alena",
    },
    {
        id: 5,
        image: 'https://avatars.mds.yandex.net/i?id=00f04b79d77ce5b92a64e5e04a30ee04_l-5213357-images-thumbs&ref=rim&n=13&w=640&h=640',
        name: "Oksana",
    },
    {
        id: 6,
        image: 'https://avatars.mds.yandex.net/i?id=4afbe4836942ea41095c37dc88643eec_l-5345102-images-thumbs&ref=rim&n=13&w=640&h=640',
        name: "Viktoria",
    },
]

const Tinder = () => {
    const activeIndex = useSharedValue(0)
    return (
        <View style={styles.page}>
            <Stack.Screen options={{headerShown: false}}/>

            {users.map((user, index) => (
                <TinderCard
                    user={user}
                    key={user.id}
                    numOfCards={users.length}
                    index={index}
                    activeIndex={activeIndex}
                />
            ))}

        </View>
    );
};
const styles = StyleSheet.create({
    page: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})
export default Tinder;