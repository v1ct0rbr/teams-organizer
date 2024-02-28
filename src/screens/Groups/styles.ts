import styled, { css } from "styled-components/native";

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
    ${({theme}) => css`
    color: ${theme.COLORS.WHITE};
    font-size: ${theme.FONT_SIZE.LG}px;
    `}
    
`



