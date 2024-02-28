import { Noop } from "react-hook-form"
import { StyleSheet, TextInputProps } from "react-native"
import { Container, ErrorText, FormInputGroup, InputButton, InputButtonIcon, InputContainer } from "./styles"
import { currentTheme } from "../../theme"
import { LucideIcon, LucideProps, View } from "lucide-react-native"

interface InputFieldProps extends TextInputProps {
    errorMessage?: string
    onBlur: Noop
    action?: () => void,
    
    
}

export function InputField({ errorMessage, onBlur, action, ...rest }: InputFieldProps) {
    
    
    return (
        <Container>
            <InputContainer style={errorMessage ? localStyles.inputError:{}}>
                <FormInputGroup onBlur={onBlur} {...rest} ></FormInputGroup>
                {action && <InputButton onPress={action}>
                    <InputButtonIcon></InputButtonIcon>
                </InputButton>}
                
            </InputContainer>
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
