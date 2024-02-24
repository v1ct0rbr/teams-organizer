import { StatusBar} from 'react-native';
import { Roboto_400Regular, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto';
import Groups from '@screens/Groups';
// import { ActivityIndicator } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { MainTheme } from './src/theme';
import { LoadingIndicator } from '@components/LoadingIndicator';


export default function App() {

  const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold});

  

  return (
    <ThemeProvider theme={MainTheme}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent></StatusBar>
      {fontsLoaded ? <Groups /> : <LoadingIndicator />}
   </ThemeProvider>
  );
}


