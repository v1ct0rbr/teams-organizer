import { Noop } from "react-hook-form";
import { StyleSheet, TextInputProps } from "react-native";

import {
  Container,
  ErrorText,
  FormInputGroup,
  InputButton,
  InputButtonIcon,
  InputContainer,
} from "./styles";
import { currentTheme } from "../../theme";

interface InputFieldProps extends TextInputProps {
  errorMessage?: string;
  onBlur: Noop;
  action?: ({ ...props }: any) => any;
}

export function InputField({
  errorMessage,
  onBlur,
  action,
  ...rest
}: InputFieldProps) {
  return (
    <Container>
      <InputContainer style={errorMessage ? localStyles.inputError : {}}>
        <FormInputGroup onBlur={onBlur} {...rest} />
        {action && (
          <InputButton onPress={action}>
            <InputButtonIcon />
          </InputButton>
        )}
      </InputContainer>
      {!!errorMessage && <ErrorText>{errorMessage}</ErrorText>}
    </Container>
  );
}

const localStyles = StyleSheet.create({
  inputError: {
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: currentTheme.COLORS.RED_DARK,
  },
});
