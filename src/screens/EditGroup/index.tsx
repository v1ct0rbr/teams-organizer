import { Highlight } from '@components/Highlight';
import { MyButton } from '@components/MyButton';

import { MainContainer } from '@components/MainContainer';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ListEnd } from 'lucide-react-native';
import React, { useContext, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { RootStackParmaList } from '../../@types/rootstack';
import { GroupContext } from '../../contexts/GroupContext';
import { ParticipanteCard } from './_ParticipantCard';
import { AddParticipantButton, AddParticipantContainer, NoContentText, NoContentView, TeamContainer, TeamContainerItems, TeamItem, TeamItemText } from './styles';
import z from 'zod'
import { Controller, SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { InputField } from "@components/InputFiled";
import { useToast } from 'react-native-toast-notifications';

type GroupsScreenProps = NativeStackScreenProps<RootStackParmaList, "Groups">;


const FIELD_REQUIRED_STR = 'This field is required';
export const signUpFormSchema = z.object({
  name: z
      .string({
          invalid_type_error: 'Valor precisa ser uma string',
          required_error: FIELD_REQUIRED_STR,
      })
      .min(3, 'Mínimo de 3 caracteres')
      .max(20, 'Máximo de 20 caracteres')
      .trim(),

});

export type SignUpFormSchema = z.infer<typeof signUpFormSchema>;

export const Groups: React.FC<GroupsScreenProps> = ({ navigation }) => {
  const { groupState } = useContext(GroupContext)
  const [selectedTeam, setSelectedTeam] = useState(groupState.activeGroup?.teamA)

  const toast = useToast();
  const goToNewGroup = () => {
    navigation.navigate('NewGroup');
  }


  const methods = useForm<SignUpFormSchema>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
        name: '',
    },
    mode: 'onBlur',
});
function clearFieds() {
    methods.reset({name: ''})
}

  const onSubmit: SubmitHandler<SignUpFormSchema> = (data) => {
    //createGroup(data.name);
    toast.show("Cadastrado com sucesso", {
        type: "success",
        placement: "top",
        duration: 4000,
        animationType: "slide-in",
    });
    clearFieds()
  };
  
  const onError: SubmitErrorHandler<SignUpFormSchema> = (
    errors,e
  ) => {
   
          console.log(JSON.stringify(errors));
  };


  return (
    <MainContainer>

      {/* <Header /> */}
      <Highlight title={groupState.activeGroup?.name} subtitle='adicione a galera e separe os times'></Highlight>

      <Controller
                control={methods.control}
                name="name"                
                render={({
                    field: { onChange, onBlur, value },
                    fieldState: { error },
                }) => {
                    return (     
                      <AddParticipantContainer>
                        <InputField id="group_name" maxLength={20} value={value} onBlur={onBlur} errorMessage={error?.message} onChangeText={onChange} placeholder="Nome do participante" />
                        <AddParticipantButton></AddParticipantButton>
                      </AddParticipantContainer>                   
                    );
                }}
            />
     
     <TeamContainer>
                <TeamContainerItems>
                  <TeamItem>
                    <TeamItemText> TIME A</TeamItemText></TeamItem>
                  <TeamItem>
                    <TeamItemText>TIME B</TeamItemText></TeamItem>
                </TeamContainerItems>
                <Text>{selectedTeam?.participants?.length}</Text>

     </TeamContainer>

      <View style={{ flex: 1, justifyContent: 'space-between' }}>
        {selectedTeam &&
          
          <FlatList data={selectedTeam?.participants}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <ParticipanteCard key={item.id} participant={item} />
            )} showsVerticalScrollIndicator={false} ListEmptyComponent={() => (
              <NoContentView>
                <ListEnd size={20} color="white" />
                <NoContentText>Não há participantes no time</NoContentText>
              </NoContentView>

            )} />
        }
      </View>
      <MyButton title="Remover turma" isPositionBottom onPress={goToNewGroup} isDanger ></MyButton>
    </MainContainer>

  );
}


