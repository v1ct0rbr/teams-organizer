import { Text, TextInputProps } from "react-native"
import { Container, FormInputGroup } from "./styles"
import { Noop } from "react-hook-form"

interface InputFieldProps extends TextInputProps {
    errorMessage?: string
    
    onBlur: Noop

}

export function InputField({ errorMessage, onBlur, ...rest }: InputFieldProps) {
    return (
        <Container>
            <FormInputGroup onBlur={onBlur} {...rest}></FormInputGroup>
            {!!errorMessage && <Text>{errorMessage}</Text>}
        </Container>
    )
}