import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider as PaperProvider } from "react-native-paper";
import { Feather } from "@expo/vector-icons";
import { hideAsync } from "expo-splash-screen";

import Navigation from "./src/navigation";
import { decode, encode } from "base-64";

if (!global.btoa) {
  global.btoa = encode;
}

if (!global.atob) {
  global.atob = decode;
}

export default function App() {
  React.useEffect(() => {
    hideAsync();
  }, []);
  return (
    <PaperProvider settings={{ icon: (props) => <Feather {...props} /> }}>
      <SafeAreaProvider>
        <Navigation />
        <StatusBar style="inverted" />
      </SafeAreaProvider>
    </PaperProvider>
  );
}
