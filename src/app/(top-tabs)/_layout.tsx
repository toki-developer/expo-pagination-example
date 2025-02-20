import {
  createMaterialTopTabNavigator,
  MaterialTopTabNavigationEventMap,
  MaterialTopTabNavigationOptions,
} from "@react-navigation/material-top-tabs";
import { ParamListBase, TabNavigationState } from "@react-navigation/native";
import { withLayoutContext } from "expo-router";
import { SafeAreaView } from "react-native";

const { Navigator } = createMaterialTopTabNavigator();

const MaterialTopTabs = withLayoutContext<
  MaterialTopTabNavigationOptions,
  typeof Navigator,
  TabNavigationState<ParamListBase>,
  MaterialTopTabNavigationEventMap
>(Navigator);

/**
 * @see https://reactnavigation.org/docs/material-top-tab-navigator/
 * @see https://github.com/EvanBacon/expo-router-layouts-example/blob/main/layouts/material-top-tabs.tsx (作者のexample)
 * @see https://reactnativepro.dev/posts/expo-router-top-tabs (公式ドキュメントではない)
 */
export default function TopTabLayout() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MaterialTopTabs>
        <MaterialTopTabs.Screen name="top-tab1" />
        <MaterialTopTabs.Screen name="top-tab2" />
      </MaterialTopTabs>
    </SafeAreaView>
  );
}
