import { useContext } from "react"
import { Group } from "../../../reducers/GroupReducer"
import { Container, GroupTitle, IconUserGroup } from "./styles"
import { GroupContext } from "../../../contexts/GroupContext"
import { useNavigation } from "@react-navigation/native"


interface GroupcardProps{
    group: Group
}

export function Groupcard({group} : GroupcardProps) {

        const {removeGroup, groupState, selectGroup} = useContext(GroupContext);

    const navigation = useNavigation();

    function handleRemoveGroup(){
        removeGroup(group.id);
    }

    function handleSelectGroup(groupId: string){
                
            selectGroup(groupId);
    }

    return (
        <Container onLongPress={handleRemoveGroup} onPress={() => handleSelectGroup(group.id)}>
            <IconUserGroup />
            <GroupTitle>{group.name}</GroupTitle>
        </Container>
    )
}

