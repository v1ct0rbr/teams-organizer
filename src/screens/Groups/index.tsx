import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { MyButton } from '@components/MyButton';
import { Container } from '../../Layouts/MainLayout/styles';
import { Groupcard } from './_Groupcard';
import { GroupCardContainer } from './styles';
import { NavigationProp } from '@react-navigation/native';




export default function Groups() {
  return (
    <Container>

      <Header />
      <Highlight title='Turma' subtitle='Jogue com sua turma'></Highlight>
     
      <GroupCardContainer>
        <Groupcard nameGroup='grupo 1' />
        <Groupcard nameGroup='grupo 2' />
  

      </GroupCardContainer>
     
    
       <MyButton title="Adicionar nova Turma" isPositionBottom></MyButton>

    </Container>

  );
}


