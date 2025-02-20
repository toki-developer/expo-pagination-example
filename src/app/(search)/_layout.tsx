import { router, Stack } from "expo-router";

/**
 * @see https://reactnavigation.org/docs/native-stack-navigator/#headersearchbaroptions
 */
export default function SearchLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="search"
        options={{
          headerSearchBarOptions: {
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
      <Stack.Screen name="search-result" />
    </Stack>
  );
}
