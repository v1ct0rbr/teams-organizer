import { LoadingIndicator } from "@components/LoadingIndicator";
import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";
import { Routes } from "@routes/index";
import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ToastProvider } from "react-native-toast-notifications";
import { ThemeProvider } from "styled-components/native";

import { GroupContextProvider } from "./src/contexts/GroupContext";
import { MainTheme } from "./src/theme";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  const currentTheme = { ...MainTheme };
  return (
    <ThemeProvider theme={currentTheme}>
      <GroupContextProvider>
        <StatusBar
          barStyle="light-content"
          backgroundColor={currentTheme.COLORS.GRAY_600}
        />
        <SafeAreaProvider>
          <ToastProvider>
            {fontsLoaded ? <Routes /> : <LoadingIndicator />}
          </ToastProvider>
        </SafeAreaProvider>
      </GroupContextProvider>
    </ThemeProvider>
  );
}
