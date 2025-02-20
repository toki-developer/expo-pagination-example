import { Tabs } from "expo-router";

/**
 * @see https://docs.expo.dev/router/advanced/tabs/
 */
export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" />
      <Tabs.Screen name="explore" />
    </Tabs>
  );
}
