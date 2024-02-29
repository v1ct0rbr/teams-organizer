import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useContext } from "react";

import { Container, GroupTitle, IconUserGroup } from "./styles";
import { RootStackParamList } from "../../../@types/rootstack";
import { GroupContext } from "../../../contexts/GroupContext";
import { Group } from "../../../reducers/GroupReducer";

// interface GroupsCardScreenProps extends NativeStackScreenProps<RootStackParmaList, "Groups">
interface GroupcardProps {
  group: Group;
}

export const Groupcard = ({ group }: GroupcardProps) => {
  const { removeGroup, selectGroup } = useContext(GroupContext);

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, "Groups">>();

  function handleRemoveGroup() {
    removeGroup(group.id);
  }

  function handleSelectGroup(groupId: string) {
    selectGroup(groupId);
    navigation.navigate("EditGroup");
  }

  return (
    <Container
      onLongPress={handleRemoveGroup}
      onPress={() => {
        handleSelectGroup(group.id);
      }}
    >
      <IconUserGroup />
      <GroupTitle>{group.name}</GroupTitle>
    </Container>
  );
};
