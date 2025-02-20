import { Text, View } from "react-native";

export default function Stack() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Hello Stack</Text>
    </View>
  );
}
