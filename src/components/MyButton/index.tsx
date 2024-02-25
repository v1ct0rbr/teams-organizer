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
       { isDanger ? <ButtonDanger style={isPositionBottom ? styles.ButtonBottom : null} {...rest}>
        <ButtonTitle>{title}</ButtonTitle>
       </ButtonDanger> : <ButtonSuccess style={isPositionBottom ? styles.ButtonBottom : null} {...rest}>
        <ButtonTitle>{title}</ButtonTitle></ButtonSuccess>}
  </Container>      


    )
}

const styles = StyleSheet.create({
    ButtonBottom:{
    position: "absolute",
    bottom: 0
    }
    
})