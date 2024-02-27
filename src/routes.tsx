
import { Header } from '@components/Header';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NewGroup } from '@screens/NewGroup';
import { MainTheme } from './theme';
import { Groups } from '@screens/Groups';
import { RootStackParmaList } from './@types/rootstack';





const Stack = createNativeStackNavigator<RootStackParmaList>();
export default function Routes() {
    return (
        <NavigationContainer>
            
            <Stack.Navigator initialRouteName='Groups'
             screenOptions={{
                header: props => <Header showBackButton={props.route.name != 'Groups'} {...props} />,
                headerTintColor: 'white',
                headerStyle: { backgroundColor: MainTheme.COLORS.GRAY_700},               
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
            </Stack.Navigator>
        </NavigationContainer>
    );
}