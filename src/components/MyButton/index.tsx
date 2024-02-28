import { StyleSheet, Text, TouchableOpacityProps, View } from "react-native";
import { ButtonDanger, ButtonSuccess, ButtonTitle, Container } from "./styles";


interface SubmitButtonProps extends TouchableOpacityProps{
    
    title: string
    isPositionBottom?: boolean,
    isDanger?: boolean
}

export function MyButton({title, isPositionBottom=false, isDanger=false, ...rest}: SubmitButtonProps) {
    return (
  <Container>
       { isDanger ? <ButtonDanger  {...rest}>
        <ButtonTitle>{title}</ButtonTitle>
       </ButtonDanger> : <ButtonSuccess  {...rest}>
        <ButtonTitle>{title}</ButtonTitle></ButtonSuccess>}
  </Container>      


    )
}

