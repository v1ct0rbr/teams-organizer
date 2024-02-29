import { Header } from "@components/Header";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { EditGroup } from "@screens/EditGroup";
import { Groups } from "@screens/Groups";
import { NewGroup } from "@screens/NewGroup";

import { RootStackParamList } from "../@types/rootstack";
import { MainTheme } from "../theme";

const Stack = createNativeStackNavigator<RootStackParamList>();
export default function AppRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="Groups"
      screenOptions={{
        header: (props) => (
          <Header showBackButton={props.route.name !== "Groups"} {...props} />
        ),
        headerTintColor: "white",
        headerStyle: { backgroundColor: MainTheme.COLORS.GRAY_700 },
        animationTypeForReplace: "pop",
      }}
    >
      <Stack.Screen name="Groups" component={Groups} />
      <Stack.Screen name="NewGroup" component={NewGroup} />
      <Stack.Screen name="EditGroup" component={EditGroup} />
    </Stack.Navigator>
  );
}
