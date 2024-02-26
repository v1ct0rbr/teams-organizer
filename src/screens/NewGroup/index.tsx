import { View } from "react-native";
import { Container, FormInputGroup, IconGroups } from "./styles";
import { Highlight } from "@components/Highlight";
import { MainContainer } from "@components/MainContainer";
import { MyButton } from "@components/MyButton";

export function NewGroup(){
    return (<MainContainer>
        <Container>
        <IconGroups />
        <Highlight title="Nova Turma" subtitle="Crie uma turma para adcionar pessoas"></Highlight>
        <FormInputGroup />
        <MyButton title="Criar" isPositionBottom={false} />
        </Container>
    </MainContainer>)
}