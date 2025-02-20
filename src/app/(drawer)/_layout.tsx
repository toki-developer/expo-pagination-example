import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

/**
 * @see https://docs.expo.dev/router/advanced/drawer/
 * @see https://reactnavigation.org/docs/drawer-navigator/
 */
export default function DrawerLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen name="drawer1" />
        <Drawer.Screen name="drawer2" />
      </Drawer>
    </GestureHandlerRootView>
  );
}
