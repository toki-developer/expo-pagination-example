import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { router } from "expo-router";
import Feather from "@expo/vector-icons/Feather";
import { Text } from "react-native";

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <Text style={{ textAlign: "center", padding: 16 }}>Hello Drawer</Text>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Stack"
        onPress={() => router.push({ pathname: "/stack" })}
        icon={(props) => <Feather name="smile" size={24} color={props.color} />}
      />
    </DrawerContentScrollView>
  );
};

/**
 * @see https://docs.expo.dev/router/advanced/drawer/
 * @see https://reactnavigation.org/docs/drawer-navigator/
 */
export default function CustomDrawerLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer drawerContent={CustomDrawerContent}>
        <Drawer.Screen
          name="custom-drawer1"
          options={{
            title: "Drawer 1",
            drawerIcon: (props) => (
              <Feather name="frown" size={24} color={props.color} />
            ),
          }}
        />
        <Drawer.Screen
          name="custom-drawer2"
          options={{
            drawerIcon: (props) => (
              <Feather name="meh" size={24} color={props.color} />
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
