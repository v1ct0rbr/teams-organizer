import { Highlight } from "@components/Highlight";
import { MainContainer } from "@components/MainContainer";
import { MyButton } from "@components/MyButton";
//import { NativeStackScreenProp } from "@react-navigation/native-stack";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ListEnd } from "lucide-react-native";
import React, { useContext } from "react";
import { FlatList, View } from "react-native";

import { Groupcard } from "./_Groupcard";
import { NoContentText, NoContentView } from "./styles";
import { RootStackParamList } from "../../@types/rootstack";
import { GroupContext } from "../../contexts/GroupContext";

type GroupsScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Groups">;
};

export const Groups: React.FC<GroupsScreenProps> = ({ navigation }) => {
  const goToNewGroup = () => {
    navigation.navigate("NewGroup");
  };
  const { groupState } = useContext(GroupContext);

  return (
    <MainContainer>
      {/* <Header /> */}
      <Highlight title="Turma" subtitle="Jogue com a sua turma" />

      <View style={{ flex: 1, justifyContent: "space-between" }}>
        <FlatList
          data={groupState.groups}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <Groupcard key={item.id} group={item} />}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <NoContentView>
              <ListEnd size={20} color="white" />
              <NoContentText>Não há turmas</NoContentText>
            </NoContentView>
          )}
        />
      </View>
      <MyButton
        title="Adicionar nova Turma"
        isPositionBottom
        onPress={goToNewGroup}
      />
    </MainContainer>
  );
};
