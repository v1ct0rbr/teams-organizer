import { View } from "react-native";
import { Container, FormInputGroup, IconGroups } from "./styles";
import { Highlight } from "@components/Highlight";
import { MainContainer } from "@components/MainContainer";
import { MyButton } from "@components/MyButton";
import { useContext, useState } from "react";
import { GroupContext } from "../../contexts/GroupContext";

export function NewGroup(){

    const [groupName, setGroupName] = useState('');
    const {} = useContext(GroupContext);

    const {createGroup} = useContext(GroupContext)


    function handleChangeInputValue(text: string){
        setGroupName(text);
    }

    function handleCreateNewGroup(){
        createGroup(groupName);
        setGroupName('');
    }

    
    return (<MainContainer>
        <Container>
        <IconGroups />
        <Highlight title="Nova Turma" subtitle="Crie uma turma para adcionar pessoas"></Highlight>
        <FormInputGroup value={groupName} onChangeText={handleChangeInputValue} placeholder="Escreva o nome da turma" />
        <MyButton title="Criar" isPositionBottom={false} onPress={handleCreateNewGroup} />
        </Container>
    </MainContainer>)
}