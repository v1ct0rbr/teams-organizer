import { TouchableOpacity } from "react-native";
import { css, styled } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
`;
type TouchableOpacityProps = {
  isDanger: boolean;
};

export const Button = styled(TouchableOpacity)<TouchableOpacityProps>`
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 60px;
  border-radius: 5px;
  ${({ theme, isDanger }) => css`
    color: ${theme.COLORS.WHITE};
    background-color: ${!isDanger
      ? theme.COLORS.GREEN_700
      : theme.COLORS.RED_DARK};
  `}
`;

export const ButtonTitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
`;
