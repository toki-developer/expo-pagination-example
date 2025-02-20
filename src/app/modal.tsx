import { Text, View } from "react-native";

/**
 * @see https://docs.expo.dev/router/advanced/modals/
 */
export default function Modal() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Hello Modal</Text>
    </View>
  );
}
