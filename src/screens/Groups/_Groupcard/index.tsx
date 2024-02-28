import { useContext } from "react"
import { Group } from "../../../reducers/GroupReducer"
import { Container, GroupTitle, IconUserGroup } from "./styles"
import { GroupContext } from "../../../contexts/GroupContext"
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { RootStackParamList } from "../../../@types/rootstack"


// interface GroupsCardScreenProps extends NativeStackScreenProps<RootStackParmaList, "Groups">
interface GroupcardProps {
    group: Group

}



export const Groupcard = ({ group }: GroupcardProps) => {

    const { removeGroup, groupState, selectGroup } = useContext(GroupContext);

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, "Groups">>()


    function handleRemoveGroup() {
        removeGroup(group.id);
    }

    function handleSelectGroup(groupId: string) {

        selectGroup(groupId);
        navigation.navigate("EditGroup");
    }

    return (
        <Container onLongPress={handleRemoveGroup} onPress={() => { handleSelectGroup(group.id); }}>
            <IconUserGroup />
            <GroupTitle>{group.name}</GroupTitle>
        </Container>
    )
}

