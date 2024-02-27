import { Roboto_400Regular, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto';
import { LoadingIndicator } from '@components/LoadingIndicator';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import Routes from './src/routes';
import { MainTheme } from './src/theme';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GroupContextProvider } from './src/contexts/GroupContext';
import { ToastProvider } from 'react-native-toast-notifications'


export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  const currentTheme = { ...MainTheme }
  return (

    <ThemeProvider theme={currentTheme}>
      <GroupContextProvider>
      
        <StatusBar barStyle="light-content" backgroundColor={currentTheme.COLORS.GRAY_600} ></StatusBar>
        <SafeAreaProvider>
          <ToastProvider>
          {fontsLoaded ?
            <Routes /> : <LoadingIndicator />}
            </ToastProvider>
        </SafeAreaProvider>
      </GroupContextProvider>
    </ThemeProvider>

  );
}


