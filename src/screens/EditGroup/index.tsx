import { Highlight } from "@components/Highlight";
import { InputField } from "@components/InputFiled";
import { MainContainer } from "@components/MainContainer";
import { MyButton } from "@components/MyButton";
import { zodResolver } from "@hookform/resolvers/zod";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ListEnd } from "lucide-react-native";
import React, { useContext, useState } from "react";
import {
  Controller,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { FlatList, View } from "react-native";
import { useToast } from "react-native-toast-notifications";
import uuid from "react-native-uuid";
import z from "zod";

import { ParticipanteCard } from "./_ParticipantCard";
import {
  NoContentText,
  NoContentView,
  TeamContainer,
  TeamContainerItems,
  TeamItem,
  TeamItemCount,
  TeamItemText,
} from "./styles";
import { RootStackParamList } from "../../@types/rootstack";
import { GroupContext } from "../../contexts/GroupContext";

type EditGroupScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "EditGroup"
>;

const FIELD_REQUIRED_STR = "This field is required";
export const editGroupFormSchema = z.object({
  name: z
    .string({
      invalid_type_error: "Valor precisa ser uma string",
      required_error: FIELD_REQUIRED_STR,
    })
    .min(3, "Mínimo de 3 caracteres")
    .max(20, "Máximo de 20 caracteres")
    .trim(),
});

export type EditGroupFormSchema = z.infer<typeof editGroupFormSchema>;

export const EditGroup: React.FC<EditGroupScreenProps> = ({ navigation }) => {
  const { groupState, updateTeam, removeGroup } = useContext(GroupContext);
  const toast = useToast();
  const [selectedTeam, setSelectedTeam] = useState(
    groupState.activeGroup.teamA,
  );

  const methods = useForm<EditGroupFormSchema>({
    resolver: zodResolver(editGroupFormSchema),
    defaultValues: {
      name: "",
    },
    mode: "onBlur",
  });

  function clearFieds() {
    methods.reset({ name: "" });
  }

  function handleSelectTeam(team: "A" | "B") {
    switch (team) {
      case "A":
        setSelectedTeam(groupState.activeGroup.teamA);
        break;
      case "B":
        setSelectedTeam(groupState.activeGroup.teamB);
    }
  }
  function handleRemoveGroup() {
    removeGroup(groupState.activeGroup.id);
    navigation.navigate("Groups");
    toast.show("Grupo excluído", {
      type: "success",
      placement: "top",
      duration: 4000,
      animationType: "slide-in",
    });
  }

  const onSubmit: SubmitHandler<EditGroupFormSchema> = (data) => {
    const existingParticipantIndex =
      selectedTeam?.participants &&
      selectedTeam?.participants.findIndex((p) => p.name === data.name);
    if (existingParticipantIndex && existingParticipantIndex > -1) {
      return;
    } else {
      const newParticipants = [
        ...selectedTeam.participants,
        { id: uuid.v4().toString(), name: data.name },
      ];
      const team = { ...selectedTeam, participants: newParticipants };
      setSelectedTeam(team);
      updateTeam(groupState.activeGroup.id, team);
    }
    clearFieds();
  };

  const handleRemoveParticipant = (id: string) => {
    const newParticipants = selectedTeam.participants.filter(
      (p) => p.id !== id,
    );
    const team = { ...selectedTeam, participants: newParticipants };
    setSelectedTeam(team);
    updateTeam(groupState.activeGroup.id, team);
  };

  const onError: SubmitErrorHandler<EditGroupFormSchema> = (errors, e) => {
    // console.log(JSON.stringify(errors));
  };

  return (
    <MainContainer>
      {/* <Header /> */}
      <Highlight
        title={groupState.activeGroup?.name}
        subtitle="adicione a galera e separe os times"
      />

      <Controller
        control={methods.control}
        name="name"
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => {
          return (
            <InputField
              action={methods.handleSubmit(onSubmit, onError)}
              id="group_name"
              maxLength={20}
              value={value}
              onBlur={onBlur}
              errorMessage={error?.message}
              onChangeText={onChange}
              placeholder="Nome do participante"
            />
          );
        }}
      />

      <TeamContainer>
        <TeamContainerItems>
          <TeamItem
            selected={selectedTeam?.name === "TIME A"}
            onPress={() => handleSelectTeam("A")}
          >
            <TeamItemText>{groupState.activeGroup?.teamA.name}</TeamItemText>
          </TeamItem>
          <TeamItem
            selected={selectedTeam?.name === "TIME B"}
            onPress={() => handleSelectTeam("B")}
          >
            <TeamItemText>{groupState.activeGroup?.teamB.name}</TeamItemText>
          </TeamItem>
        </TeamContainerItems>
        <TeamItemCount>{selectedTeam?.participants?.length}</TeamItemCount>
      </TeamContainer>

      <View style={{ flex: 1, justifyContent: "space-between" }}>
        {selectedTeam && (
          <FlatList
            data={selectedTeam?.participants}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <ParticipanteCard
                key={item.id}
                participant={item}
                removeAction={handleRemoveParticipant}
              />
            )}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={() => (
              <NoContentView>
                <ListEnd size={20} color="white" />
                <NoContentText>Não há participantes no time</NoContentText>
              </NoContentView>
            )}
          />
        )}
      </View>
      <MyButton
        title="Remover turma"
        isPositionBottom
        onPress={handleRemoveGroup}
        isDanger
      />
    </MainContainer>
  );
};
