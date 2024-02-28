
import { Users } from 'lucide-react-native'
import { styled } from 'styled-components/native'


export const Container = styled.TouchableOpacity`
    width: 100%;
    height:80px;
    border-radius: 5px;
    background-color: ${({theme}) => theme.COLORS.GRAY_500};
    align-items: center;
    padding-left: 20px;
    flex-direction: row;
    margin-bottom: 16px;
`


export const IconUserGroup = styled(Users).attrs(({theme}) => ({
    color: theme.COLORS.GREEN_500,
    size: 24
}))`margin-right : 20px;`

export const GroupTitle = styled.Text`
    color: ${({theme}) => theme.COLORS.WHITE}
`