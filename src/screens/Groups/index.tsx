import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Container, GroupCardContainer } from './styles';
import { View } from 'lucide-react-native';
import { Groupcard } from './_Groupcard';
import { Button, Text } from 'react-native';
import { Groupadd } from './_Groupadd';

export default function Groups() {
  return (
    <Container>

      <Header />
      <Highlight title='Turma' subtitle='Jogue com sua turma'></Highlight>
     
      <GroupCardContainer>
        <Groupcard nameGroup='grupo 1' />
        <Groupcard nameGroup='grupo 2' />
  

      </GroupCardContainer>
     
      <Groupadd />

    </Container>

  );
}


