import { TouchableOpacity } from "react-native";
import { ButtonAdd, ButtonTitle } from "./styles";

interface SubmitButtonProps{
    handleButtonClick?: () => void
    title: string
}

export function SubmitButton({handleButtonClick, title}: SubmitButtonProps) {
    return (

        <ButtonAdd onPress={handleButtonClick}>
            <ButtonTitle>{title}</ButtonTitle>
        </ButtonAdd>

    )
}