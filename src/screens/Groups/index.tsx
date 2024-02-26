import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { MyButton } from '@components/MyButton';

import { Groupcard } from './_Groupcard';
import { GroupCardContainer } from './styles';
import { MainContainer } from '@components/MainContainer';
import React from 'react';
import { useNavigation } from '@react-navigation/native';


interface GroupProps {
  navigation: any
}


export const Groups = () => {
  const navigation = useNavigation();
  return (
    <MainContainer>

      {/* <Header /> */}
      <Highlight title='Turma' subtitle='Jogue com sua turma'></Highlight>
     
      <GroupCardContainer>
        <Groupcard nameGroup='grupo 1' />
        <Groupcard nameGroup='grupo 2' />
        <Groupcard nameGroup='grupo 3' />
  

      </GroupCardContainer>
     
    
       <MyButton title="Adicionar nova Turma" isPositionBottom ></MyButton>

    </MainContainer>

  );
}


