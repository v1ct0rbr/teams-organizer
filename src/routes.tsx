
import { Header } from '@components/Header';
import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NewGroup } from '@screens/NewGroup';
import { MainTheme } from './theme';
import { Groups } from '@screens/Groups';
import { RootStackParamList } from './@types/rootstack';
import { EditGroup } from '@screens/EditGroup';





const Stack = createNativeStackNavigator<RootStackParamList>();
export default function Routes() {
    return (
        <NavigationContainer theme={DarkTheme}>
            
            <Stack.Navigator initialRouteName='Groups'
             screenOptions={{
                header: props => <Header showBackButton={props.route.name != 'Groups'} {...props} />,
                headerTintColor: 'white',
                headerStyle: { backgroundColor: MainTheme.COLORS.GRAY_700}, 
                animationTypeForReplace: 'pop'              
              }}
              
            >
                <Stack.Screen
                    name="Groups"
                    component={Groups}
                                             
                   
                />
                <Stack.Screen
                    name="NewGroup"
                    component={NewGroup}
                 
                />
                  <Stack.Screen
                    name="EditGroup"
                    component={EditGroup}
                 
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}