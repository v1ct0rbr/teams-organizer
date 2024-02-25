import { BackNavigation } from '@components/BackNavigation';
import { Highlight } from '@components/Highlight';
import {  DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Groups from '@screens/Groups';
import { NewGroup } from '@screens/NewGroup';

const Stack = createNativeStackNavigator();
export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Groups'
             screenOptions={{
                headerTintColor: 'white',
                headerStyle: { backgroundColor: DefaultTheme.colors.text},
               
              }}
            >
                <Stack.Screen
                    name="Groups"
                    component={Groups}
                    options={({ navigation }) => ({
                        headerLeft: () => (
                            <BackNavigation onPress={() => navigation.goBack()} />
                        ),
                        headerRight: () => (
                            <Highlight title='New Group'></Highlight>
                          
                        ),
                      })}
                />
                <Stack.Screen
                    name="New Group"
                    component={NewGroup}
                    // options={({ navigation, route }) => ({
                    //     headerLeft: () => (
                    //         <BackNavigation onPress={() => navigation.goBack()} />
                    //     ),
                    //     headerRight: () => (
                    //         <Highlight title='New Group'></Highlight>
                          
                    //     ),
                    //   })}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}