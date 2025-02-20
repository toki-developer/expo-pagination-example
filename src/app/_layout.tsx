import { Stack } from "expo-router";

/**
 * @see https://docs.expo.dev/router/advanced/stack/
 */
export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
      <Stack.Screen name="(custom-drawer)" options={{ headerShown: false }} />
      <Stack.Screen name="(search)" options={{ headerShown: false }} />
      <Stack.Screen name="(top-tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="stack"
        options={{ headerBackButtonDisplayMode: "minimal" }}
      />
      <Stack.Screen name="modal" options={{ presentation: "modal" }} />
    </Stack>
  );
}
