import {} from 'styled-components/native'

import {currentTheme} from '../theme';


declare module 'styled-components/native' {
    type ThemeType = typeof currentTheme;

    export interface DefaultTheme extends ThemeType {}
}