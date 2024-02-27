import { Noop } from "react-hook-form"
import { StyleSheet, TextInputProps } from "react-native"
import { Container, ErrorText, FormInputGroup } from "./styles"
import { currentTheme } from "../../theme"

interface InputFieldProps extends TextInputProps {
    errorMessage?: string
    onBlur: Noop
}

export function InputField({ errorMessage, onBlur, ...rest }: InputFieldProps) {
    return (
        <Container>
            <FormInputGroup onBlur={onBlur} {...rest} style={errorMessage ? localStyles.inputError:{}}></FormInputGroup>
            {!!errorMessage && <ErrorText>{errorMessage}</ErrorText>}
        </Container>
    )
}

const localStyles = StyleSheet.create({
    inputError: {
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: currentTheme.COLORS.RED_DARK
    }
})
