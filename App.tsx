import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import React, { useEffect } from "react";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import { NhostClient, NhostProvider } from "@nhost/react";
import * as SecureStore from "expo-secure-store";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const nhost = new NhostClient({
    backendUrl: "https://lcfqgxwjihdgkfohtssf.hasura.ap-south-1.nhost.run",
    // subdomain: "ap-south-1",
    // region: "ap-south-1",
    clientStorageType: "expo-secure-storage",
    clientStorage: SecureStore,
  });

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <NhostProvider nhost={nhost}>
        <SafeAreaProvider>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </SafeAreaProvider>
      </NhostProvider>
    );
  }
}
