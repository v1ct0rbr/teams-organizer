import { Highlight } from '@components/Highlight';
import { MyButton } from '@components/MyButton';

import { MainContainer } from '@components/MainContainer';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Groupcard } from './_Groupcard';
import { GroupCardContainer } from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParmaList } from '../../@types/rootstack';
import { View } from 'react-native';

type GroupsScreenProps = NativeStackScreenProps<RootStackParmaList, "Groups">;

export const Groups: React.FC<GroupsScreenProps> = ({navigation}) => {
  
  const goToNewGroup = () => {
    navigation.navigate('NewGroup');
  }

  return (
    <MainContainer>

      {/* <Header /> */}
      <Highlight title='Turma' subtitle='Jogue com sua turma'></Highlight>
      
      <View style={{ flex: 1, justifyContent: 'space-between' }}>
      <GroupCardContainer>
        <Groupcard nameGroup='grupo 1' />
        <Groupcard nameGroup='grupo 2' />
        <Groupcard nameGroup='grupo 3' />
  

      </GroupCardContainer>
     
    
       <MyButton title="Adicionar nova Turma" isPositionBottom onPress={goToNewGroup}  ></MyButton>
       </View>
    </MainContainer>

  );
}


