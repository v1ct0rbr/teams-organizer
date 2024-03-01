import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

type TeamItemProps = {
  selected: boolean;
};

export const Container = styled.View`
  flex: 1;
  background-color: transparent;
`;
export const NoContentView = styled.View`
  flex: 1;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const NoContentText = styled.Text`
  text-align: center;
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-size: ${theme.FONT_SIZE.LG}px;
  `};
`;

export const AddParticipantButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  width: 10%;
  height: 100%;
  border-radius: 5px;
`;

export const TeamContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const TeamContainerItems = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;

export const TeamItem = styled(TouchableOpacity)<TeamItemProps>`
  align-items: center;
  justify-content: center;
  padding: 6px;
  border-radius: 5px;
  ${({ selected, theme }) =>
    selected &&
    css`
      padding: 4px;
      border-width: 2px;
      border-style: solid;
      border-color: ${theme.COLORS.GREEN_700};
    `}
`;

export const TeamItemText = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;
export const TeamItemCount = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const SelectedTeamItem = styled(TeamItem)`
  border: 2px solid ${({ theme }) => theme.COLORS.GREEN_700};
`;
