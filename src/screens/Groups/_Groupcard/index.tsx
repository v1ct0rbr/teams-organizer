import { useContext } from "react"
import { Group } from "../../../reducers/GroupReducer"
import { Container, GroupTitle, IconUserGroup } from "./styles"
import { GroupContext } from "../../../contexts/GroupContext"


interface GroupcardProps{
    group: Group
}

export function Groupcard({group} : GroupcardProps) {

        const {removeGroup} = useContext(GroupContext);

    function handleRemoveGroup(){
        removeGroup(group.id);
    }

    return (
        <Container onLongPress={handleRemoveGroup}>
            <IconUserGroup />
            <GroupTitle>{group.name}</GroupTitle>
        </Container>
    )
}

