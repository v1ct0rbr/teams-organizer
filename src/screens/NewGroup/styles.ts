import { User, Users2 } from 'lucide-react-native'
import {css, styled} from 'styled-components/native'

export const Container = styled.View`
    padding-top: 150px;
    height: fit-content;
    background-color: ${({theme}) => theme.COLORS.GRAY_600};
    align-items: center;
    justify-content: center;
    gap: 20px;

`

export const IconGroups = styled(Users2).attrs(({theme}) => ({
    color: theme.COLORS.GREEN_500,
    size: 24
}))``

export const FormInputGroup = styled.TextInput.attrs(({theme}) => ({
  placeholderTextColor:  theme.COLORS.GRAY_300
}))`
    width: 100%;
    border-radius: 5px;
    padding: 10px;
    ${({theme}) => css`
        color: ${theme.COLORS.WHITE};
        background-color: ${theme.COLORS.GRAY_700};
    `}
    
`