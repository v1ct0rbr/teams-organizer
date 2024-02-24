import { User, Users2 } from 'lucide-react-native'
import {styled} from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.COLORS.GRAY_600};
    padding: 24px;
    align-items: center;
    justify-content: center;
    gap: 20px;

`

export const IconGroups = styled(Users2).attrs(({theme}) => ({
    color: theme.COLORS.GREEN_500,
    size: 24
}))

export const FormInputGroup = styled.TextInput.attrs(({theme}) => ({
  placeholderTextColor:  theme.COLORS.GRAY_300
}))`
    width: 100%;
    border-radius: 5px;
    padding: 10px;
    color: ${({theme}) => theme.COLORS.WHITE};
    background-color: ${({theme}) => theme.COLORS.GRAY_700};
`