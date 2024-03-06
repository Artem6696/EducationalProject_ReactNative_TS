import onBoarding from "@/app/(platform)/part2/onboarding";
import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

type PartListItem = {
  part: number;
};
export default function DayListItem({ part }: PartListItem) {
  return (
    <Link href={`/part${part}`} asChild>
      <Pressable style={styles.box}>
        <Text style={styles.text}>{part}</Text>
      </Pressable>
    </Link>
  );
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
    fontFamily: "AmaticBold",

    fontSize: 70,
    color: "#4b3832",
  },
});
