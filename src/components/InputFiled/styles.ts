import { Plus } from "lucide-react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
`;
export const InputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  border-radius: 5px;
`;

export const FormInputGroup = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.COLORS.GRAY_300,
}))`
  padding: 10px;
  color: ${({ theme }) => theme.COLORS.WHITE};
`;
export const InputButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 36px;
`;

export const InputButtonIcon = styled(Plus).attrs(({ theme }) => ({
  color: theme.COLORS.GREEN_700,
  size: 24,
}))`
  align-items: center;
  justify-content: center;
`;

export const ErrorText = styled.Text`
  width: 100%;
  color: ${({ theme }) => theme.COLORS.RED};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  padding-top: 5px;
`;
