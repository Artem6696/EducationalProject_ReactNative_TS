import {StyleSheet, Text, View} from "react-native";
import React, {useEffect, useMemo, useState} from "react";
import MapView, {PROVIDER_GOOGLE} from "react-native-maps";
import {Stack} from "expo-router";
import apartments from "@assets/data/appartments.json";
import CustomMarker from "@/components/part5/CustomMarker";
import ApartmentListItem from "@components/part5/ApartmentListItem";
import BottomSheet, {BottomSheetFlatList} from "@gorhom/bottom-sheet";
import Apartment from "@components/core/interface";


const AirbnbScreen = () => {
    const [selectedApartment, setSelectedApartment] = useState<Apartment | null>(null)

    useEffect(() => {
        console.log(selectedApartment)
    }, [selectedApartment]);


    const snapPoints = useMemo(() => ["8%", "50%", "90%"], []);
    const renderItem = ({item}: { item: Apartment }) => {
        console.log(item)
        return (
            <ApartmentListItem apartment={item} containerStyle={{}}/> // здесь ошибка ts2741  и здесь передавать containerStyle не нужно
        )
    }

    return (
        <View>
            <Stack.Screen options={{headerShown: false}}/>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                initialRegion={{
                    latitude: 43.6477,
                    longitude: 51.1798,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                {apartments.map((apartment) => (
                    <CustomMarker
                        apartment={apartment}
                        key={apartment.id}
                        onPress={() => setSelectedApartment(apartment)}
                    />
                ))}
            </MapView>
            {/* Display selected Apartment*/}
            {selectedApartment &&
                <View style={{}}>
                    <ApartmentListItem apartment={selectedApartment} containerStyle={{
                        position: "absolute",
                        bottom: 100, // здесь поднимает компоент вверх
                        left: 10,
                        right: 10
                    }}/>
                </View>}
            <BottomSheet
                index={0}
                snapPoints={snapPoints}
                // ref={bottomSheetRef}
                // onChange={handleSheetChanges}
            >


                <Text style={styles.titleBottomSheet}>Over {apartments.length} places</Text>
                <BottomSheetFlatList
                    contentContainerStyle={{gap: 10, padding: 10}}
                    data={apartments}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderItem}
                    // contentContainerStyle={styles.contentContainer}<ApartmentListItem apartment={item}/>
                />


            </BottomSheet>
        </View>
    );
};
export default AirbnbScreen;
const styles = StyleSheet.create({
    map: {
        width: "100%",
        height: "100%",
    },
    titleBottomSheet: {
        textAlign: 'center',
        marginBottom: 15,
        fontFamily: 'InterSemiBold',
        fontSize: 16,
        marginVertical: 5
    }
});
