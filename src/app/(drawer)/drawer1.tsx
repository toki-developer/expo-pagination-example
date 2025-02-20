import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Drawer1() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Hello Drawer 1</Text>
      <Link href={{ pathname: "/" }}>Go To Index</Link>
    </View>
  );
}
