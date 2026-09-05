import "./global.css";

import { Text, View } from "react-native";
import { useCSSVariable } from "uniwind";

export default function App() {
  const rawToken = useCSSVariable("--repro");
  const colorToken = useCSSVariable("--color-repro");
  const rootedControl = useCSSVariable("--rooted-control");

  return (
    <View className="flex-1 items-center justify-center gap-4 bg-white p-8 dark:bg-black">
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
        Expected: blue rootless and green :root circles.
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
    </View>
  );
}
