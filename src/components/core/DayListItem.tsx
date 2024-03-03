import {StyleSheet,  Text , View} from "react-native"

type DayListItem = {
   day : number
}
export default function DayListItem({ day} : DayListItem) {
    return (
        <View style={styles.box}>
            <Text style={styles.text}>{day}</Text>
          </View>
    )
}
const styles = StyleSheet.create({

    box: {
      backgroundColor: "#fff4e6",
      flex: 1,
      aspectRatio: 1,
      borderWidth: 0.5,
      borderColor: "#4b3832",
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
      fontSize: 40,
      color: "#4b3832",
    },
  });
  