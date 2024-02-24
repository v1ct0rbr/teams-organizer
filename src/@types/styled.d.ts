import {} from 'styled-components/native'

import {MainTheme} from '../theme';


declare module 'styled-components/native' {
    type ThemeType = typeof MainTheme;

    export interface DefaultTheme extends ThemeType {}
}