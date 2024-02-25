import { Roboto_400Regular, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto';
import { StatusBar } from 'react-native';
import { LoadingIndicator } from '@components/LoadingIndicator';
import { ThemeProvider } from 'styled-components/native';
import Routes from './src/routes';
import { MainTheme } from './src/theme';






export default function App() {

  const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold});

  

  return (
    <ThemeProvider theme={MainTheme}>        
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent></StatusBar>
 
      {fontsLoaded ? 
      <Routes /> : <LoadingIndicator />}
   </ThemeProvider>
  );
}


