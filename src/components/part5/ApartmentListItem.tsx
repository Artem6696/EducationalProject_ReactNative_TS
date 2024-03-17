import {Image, StyleProp, StyleSheet, Text, View, ViewStyle} from "react-native";
import React from "react";
import Apartment from "@components/core/interface";


export  type CustomStyle = {
    containerStyle?: StyleProp<ViewStyle>;
}
const ApartmentListItem = ({apartment, containerStyle}: { apartment: Apartment, containerStyle: ViewStyle }) => {
    return (
        <View style={[styles.card, containerStyle]}>
            <Image style={styles.image} source={{uri: apartment.image}}/>
            <View style={styles.rightContainer}>
                <Text style={styles.title}>{apartment.title}</Text>
                <Text style={styles.description}>{apartment.description}</Text>
                <View style={styles.footerContainer}>
                    <Text style={styles.price}>$ {apartment.price}</Text>
                    <Text style={styles.price}>
                        ★ {apartment.rating} ({apartment.numberOfStars})
                    </Text>
                </View>
            </View>
        </View>
    );
};
export default ApartmentListItem;
const styles = StyleSheet.create({
    card: {
        backgroundColor: "white",
        flexDirection: "row",
        borderRadius: 15,
        overflow: "hidden"
        // position: "absolute",
        //
        // bottom: 50,
        // left: 10,
        // right: 10,
        // backgroundColor: "white",
        // flexDirection: "row",
        // borderRadius: 15,
        // overflow: "hidden"
    },
    rightContainer: {
        padding: 10,
        flex: 1
    },
    title: {
        fontFamily: "InterBold",
        marginBottom: 10,
    },
    description: {
        fontFamily: "InterRegular",
        color: 'gray',
        fontSize: 12
    }
    ,
    price: {
        fontFamily: "InterRegular",
    },
    image: {
        width: 150,
        aspectRatio: 1,
    },
    footerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 'auto'
    },
});
