import "./global.css";

import { Pressable, ScrollView, Text, View } from "react-native";
import { Uniwind, useCSSVariable, useUniwind } from "uniwind";

function isConcreteVariable(value: unknown) {
  const normalized = String(value ?? "")
    .trim()
    .toLowerCase();

  return normalized !== "" && normalized !== "unset" && normalized !== "undefined";
}

export default function App() {
  const { theme } = useUniwind();
  const rawToken = useCSSVariable("--repro");
  const colorToken = useCSSVariable("--color-repro");
  const rootedControl = useCSSVariable("--rooted-control");
  const brandToken = useCSSVariable("--brand-repro");
  const brandColorToken = useCSSVariable("--color-brand-repro");
  const brandForegroundToken = useCSSVariable("--color-brand-repro-foreground");
  const mapToken = useCSSVariable("--map-repro");
  const mapColorToken = useCSSVariable("--color-map-repro");
  const mapForegroundToken = useCSSVariable("--color-map-repro-foreground");

  const supportedSyntaxWorks = [
    rootedControl,
    brandToken,
    brandColorToken,
    brandForegroundToken,
    mapToken,
    mapColorToken,
    mapForegroundToken,
  ].every(isConcreteVariable);

  return (
    <ScrollView className="flex-1 bg-white dark:bg-black">
      <View className="min-h-full items-center justify-center gap-5 p-8">
        <Text className="text-center text-xl font-bold text-black dark:text-white">
          Uniwind theme variable reproduction
        </Text>

        <View className="flex-row gap-6">
          <View className="items-center gap-2">
            <View className="h-24 w-24 rounded-full bg-repro" />
            <Text className="text-black dark:text-white">Rootless</Text>
          </View>
          <View className="items-center gap-2">
            <View className="h-24 w-24 rounded-full bg-rooted-control" />
            <Text className="text-black dark:text-white">With :root</Text>
          </View>
        </View>

        <Text className="text-center text-black dark:text-white">
          The rootless case stays broken; the documented :root syntax works.
        </Text>
        <Text className="text-center font-mono text-black dark:text-white">
          {`--repro: ${String(rawToken)}`}
        </Text>
        <Text className="text-center font-mono text-black dark:text-white">
          {`--color-repro: ${String(colorToken)}`}
        </Text>
        <Text className="text-center font-mono text-black dark:text-white">
          {`--rooted-control: ${String(rootedControl)}`}
        </Text>

        <View className="h-px w-full bg-gray-300 dark:bg-gray-700" />

        <Text className="text-center text-lg font-bold text-black dark:text-white">
          Supported production-shaped theme
        </Text>
        <View className="flex-row gap-6">
          <View className="h-24 w-24 items-center justify-center rounded-full bg-brand-repro">
            <Text className="font-bold text-brand-repro-foreground">Brand</Text>
          </View>
          <View className="h-24 w-24 items-center justify-center rounded-full bg-map-repro">
            <Text className="font-bold text-map-repro-foreground">Map</Text>
          </View>
        </View>

        <Text
          className={
            supportedSyntaxWorks
              ? "text-center font-bold text-green-600 dark:text-green-400"
              : "text-center font-bold text-red-600 dark:text-red-400"
          }
        >
          {supportedSyntaxWorks ? "PASS: all supported tokens resolved" : "FAIL: a supported token is unset"}
        </Text>
        <Text className="text-center font-mono text-black dark:text-white">
          {`brand: ${String(brandToken)} -> ${String(brandColorToken)}`}
        </Text>
        <Text className="text-center font-mono text-black dark:text-white">
          {`map: ${String(mapToken)} -> ${String(mapColorToken)}`}
        </Text>

        <Pressable
          className="rounded-full bg-black px-5 py-3 dark:bg-white"
          onPress={() => Uniwind.setTheme(theme === "dark" ? "light" : "dark")}
        >
          <Text className="font-bold text-white dark:text-black">{`Toggle theme (current: ${theme})`}</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}
