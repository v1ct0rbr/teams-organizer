import {styled} from 'styled-components/native'

export const Container = styled.View`
    
    width: 100%;
    

`
export const Button = styled.TouchableOpacity`
    width: 100%;
    margin:auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;    
    color: ${({theme}) => theme.COLORS.WHITE};
    height: 60px;
    border-radius: 5px;
    position: absolute;
    
`

export const ButtonSuccess = styled(Button)`
    background-color: ${({theme}) => theme.COLORS.GREEN_700};
`
export const ButtonDanger = styled(Button)`
    background-color: ${({theme}) => theme.COLORS.RED_DARK};
  
`

export const ButtonTitle = styled.Text`
    color: ${({theme}) => theme.COLORS.WHITE};
   font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
   font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
`