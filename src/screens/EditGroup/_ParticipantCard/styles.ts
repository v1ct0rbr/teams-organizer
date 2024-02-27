
import { User, Users } from 'lucide-react-native'
import { styled } from 'styled-components/native'


export const UserContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    
    width: 100%;
    height: 60px;
    border-radius: 5px;
    background-color: ${({theme}) => theme.COLORS.GRAY_500};
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;   
    margin-bottom: 16px;
`
export const UserInfo = styled.View`
    flex-direction: row;
    gap: 5px;
    align-items: center;
`

export const IconUserGroup = styled(User).attrs(({theme}) => ({
    color: theme.COLORS.WHITE,
    size: 24
}))`margin-right : 20px;`

export const ParticipanteTitle = styled.Text`
    color: ${({theme}) => theme.COLORS.WHITE}
`

export const RemoveParticipantButton = styled.TouchableOpacity`
    flex: 1;
    align-items: center;
    justify-content: center;
    color:  ${({theme}) => theme.COLORS.RED_DARK};
`