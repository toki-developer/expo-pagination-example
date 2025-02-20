import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function () {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Hello Tab Explore Page</Text>
      <View style={{ gap: 8, marginTop: 16 }}>
        <Link href={{ pathname: "/modal" }}>モーダル</Link>
        <Link href={{ pathname: "/stack" }}>スタック</Link>
        <Link href={{ pathname: "/(drawer)/drawer1" }}>ドロワー</Link>
        <Link href={{ pathname: "/(custom-drawer)/custom-drawer1" }}>
          カスタム ドロワー
        </Link>
        <Link href={{ pathname: "/(search)/search" }}>検索</Link>
        <Link href={{ pathname: "/(top-tabs)/top-tab1" }}>トップタブ</Link>
      </View>
    </View>
  );
}
