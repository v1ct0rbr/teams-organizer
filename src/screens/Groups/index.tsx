import { Highlight } from '@components/Highlight';
import { MyButton } from '@components/MyButton';

import { MainContainer } from '@components/MainContainer';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useContext } from 'react';
import { FlatList, Text, View } from 'react-native';
import { RootStackParmaList } from '../../@types/rootstack';
import { GroupContext } from '../../contexts/GroupContext';
import { Groupcard } from './_Groupcard';

type GroupsScreenProps = NativeStackScreenProps<RootStackParmaList, "Groups">;

export const Groups: React.FC<GroupsScreenProps> = ({navigation}) => {
  
    const goToNewGroup = () => {
      navigation.navigate('NewGroup');
    }
    const {groupState} = useContext(GroupContext)
    
  return (
    <MainContainer>

      {/* <Header /> */}
      <Highlight title='Turma' subtitle='Jogue com sua turma'></Highlight>
      
      <View style={{ flex: 1, justifyContent: 'space-between' }}>
      <FlatList data={groupState.groups} 
         keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => (
        <Groupcard key={item.id} nameGroup={item.name} />
      )} showsVerticalScrollIndicator={false} ListEmptyComponent={() => (
        <Text>Não há participantes</Text>
    )}/>    
         

      
     
    
       <MyButton title="Adicionar nova Turma" isPositionBottom onPress={goToNewGroup}  ></MyButton>
       </View>
    </MainContainer>

  );
}


