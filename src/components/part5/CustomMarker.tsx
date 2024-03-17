import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Marker } from "react-native-maps";
import Apartment from "@components/core/interface";

const CustomMarker = ({ apartment, onPress }: { apartment: Apartment; onPress: () => void }) => {
  return (
      <Marker
          onPress={onPress}
          key={apartment.id}
          coordinate={{
            latitude: apartment.latitude,
            longitude: apartment.longitude,
          }}
          title={apartment.title}
      >
        <View
            style={{
              backgroundColor: "white",
              padding: 5,
              paddingHorizontal: 10,
              borderWidth: 1,
              borderColor: "gray",
              borderRadius: 20,
            }}
        >
          <Text
              style={{
                fontFamily: "InterBold",
              }}
          >
            $ {apartment.price}
          </Text>
        </View>
      </Marker>
  );
};
export default CustomMarker;
const styles = StyleSheet.create({});
