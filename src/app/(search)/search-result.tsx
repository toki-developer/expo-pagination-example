import { NavigationProp, NavigationState } from "@react-navigation/native";
import {
  Link,
  router,
  Stack,
  useLocalSearchParams,
  useNavigation,
} from "expo-router";
import { Fragment, useEffect, useRef } from "react";
import { Text, View } from "react-native";
import { SearchBarCommands } from "react-native-screens";

type CustomNavigationProp<
  ParamList extends {},
  EventMap extends {}
> = NavigationProp<
  ParamList,
  keyof ParamList,
  string | undefined,
  NavigationState<ParamList>,
  {},
  EventMap
>;

// 正しい書き方知りたい
// @react-navigation/core/src/types.tsx見た感じ使えそうな型がない & githubで検索しても例が見つからない
// 同じ問題のissueがあるが解決してない: https://github.com/react-navigation/react-navigation/issues/12310
type StackNavigationProp = CustomNavigationProp<
  ReactNavigation.RootParamList,
  { transitionEnd: { data: { closing: boolean } } }
>;

export const useSetInitialSearchBarValue = () => {
  const ref = useRef<SearchBarCommands>(null);
  const query = useLocalSearchParams<{ q: string }>();
  const q = query.q;
  const navigation = useNavigation<StackNavigationProp>();

  // 参考: https://github.com/software-mansion/react-native-screens/issues/2392
  // refがセットされるのを待つ必要がある。少しラグがあるので要改善。
  useEffect(() => {
    const listener = navigation.addListener<"transitionEnd">(
      "transitionEnd",
      (event) => {
        if (event.data?.closing === false) {
          ref.current?.setText(q);
        }
      }
    );

    return () => {
      navigation.removeListener("transitionEnd", listener);
    };
  }, []);

  return { ref };
};

export default function SearchResult() {
  const { ref } = useSetInitialSearchBarValue();

  const query = useLocalSearchParams<{ q: string }>();

  return (
    <Fragment>
      <Stack.Screen
        options={{
          headerSearchBarOptions: {
            ref,
            placeholder: "検索する",
            inputType: "text",
            onSearchButtonPress(e) {
              router.push({
                pathname: "/search-result",
                params: { q: e.nativeEvent.text },
              });
            },
          },
        }}
      />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Hello Search Result: {query.q}</Text>
        <Link href={{ pathname: "/" }}>Go To Index</Link>
      </View>
    </Fragment>
  );
}
