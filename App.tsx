import { ThemeProvider } from 'styled-components/native';
import Groups from '@screens/Groups';
import { MainTheme } from './src/theme';


export default function App() {
  return (
    <ThemeProvider theme={MainTheme}>
      <Groups />
   </ThemeProvider>
  );
}


