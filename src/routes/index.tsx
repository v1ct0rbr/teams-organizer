import { DarkTheme, NavigationContainer } from "@react-navigation/native";

import AppRoutes from "./app.routes";
export function Routes() {
  return (
    <NavigationContainer theme={DarkTheme}>
      <AppRoutes />
    </NavigationContainer>
  );
}
