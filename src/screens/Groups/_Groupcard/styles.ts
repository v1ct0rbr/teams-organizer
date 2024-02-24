
import { Users } from 'lucide-react-native'
import { styled } from 'styled-components/native'


export const Container = styled.View`
    width: 100%;
    height: 60px;
    border-radius: 5px;
    background-color: ${({theme}) => theme.COLORS.GRAY_500};
    align-items: center;
    padding-left: 20px;
    flex-direction: row;
`


export const IconUserGroup = styled(Users).attrs(({theme}) => ({
    color: theme.COLORS.GREEN_500,
    size: 24
}))`margin-right : 20px;`

export const GroupTitle = styled.Text`
    color: ${({theme}) => theme.COLORS.WHITE}
`