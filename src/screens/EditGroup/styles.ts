import styled from "styled-components/native";

export const Container = styled.View`
 flex: 1;
 background-color: transparent; 
`
export const NoContentView = styled.View`
    flex: 1;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: 10px;
`

export const NoContentText = styled.Text`
    
    text-align: center;
    color: ${({theme}) => theme.COLORS.WHITE};
    font-size: ${({theme}) => theme.FONT_SIZE.LG}px;
`

export const AddParticipantContainer = styled.View`
    flex-direction: row;

`

export const AddParticipantButton = styled.TouchableOpacity`
    flex: 1;
    color: ${({theme}) => theme.COLORS.GREEN_700};
    background: transparent;
    border-radius: 5px;
`

export const TeamContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const TeamContainerItems = styled.View`
    flex-direction: row;
    align-items: center;
    gap: 5px
`

export const TeamItem = styled.TouchableOpacity`

`
export const TeamItemText = styled.Text`
    color: ${({theme}) => theme.COLORS.WHITE};
    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};    
`
export const TeamItemCount = styled.Text`
    color: ${({theme}) => theme.COLORS.WHITE};
    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
`

export const SelectedTeamItem = styled(TeamItem)`
    border: 2px solid ${({theme}) => theme.COLORS.GREEN_700};
`


