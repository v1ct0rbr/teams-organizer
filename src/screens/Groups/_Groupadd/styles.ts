import {styled} from "styled-components/native";


export const Container = styled.View`
 flex: 1;

 
`

export const ButtonAdd = styled.TouchableOpacity`
    position: absolute;
    bottom: 0px;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: ${({theme}) => theme.COLORS.GREEN_700};
    color: ${({theme}) => theme.COLORS.WHITE};
    height: 60px;
    border-radius: 5px;
    
`

export const ButtonTitle = styled.Text`
    color: ${({theme}) => theme.COLORS.WHITE};
   font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
   font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
`