import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';

import { EditMealPageContainer, EditMealPageContent, DoubleViewColumnsContainer, DoubleViewColumnsContent, Footer, FooterContainer } from './styles';

import { Heading } from '@components/Heading';
import { InputForm } from '@components/InputForm';
import { LabelForm } from '@components/LabelForm';
import { RadioButtonDietStatus } from '@components/RadioButtonDietStatus';
import { Button } from '@components/Button';

export function EditMealPage(){
  const navigation = useNavigation();

  function handleNavigateToMealPage() {
    navigation.navigate('meal');
  }

  return (
    <>
      <EditMealPageContainer>
        <Heading title='Editar refeição'/>

        <EditMealPageContent>
          <LabelForm label='Nome'/>
          <InputForm />
          <LabelForm label='Descrição'/>
          <InputForm numberOfLines={4} multiline />

          <DoubleViewColumnsContainer>
            <DoubleViewColumnsContent>
              <LabelForm label='Data'/>
              <InputForm />
            </DoubleViewColumnsContent>

            <View style={{width: 24}}/>

            <DoubleViewColumnsContent>
              <LabelForm label='Hora'/>
              <InputForm />
            </DoubleViewColumnsContent>
          </DoubleViewColumnsContainer>

          <LabelForm label='Está dentro da dieta?' />

          <DoubleViewColumnsContainer>
            <DoubleViewColumnsContent>
              <RadioButtonDietStatus
                title='Sim'
                type='POSITIVE'
                isActive
              />
            </DoubleViewColumnsContent>

            <View style={{width: 24}}/>

            <DoubleViewColumnsContent>
              <RadioButtonDietStatus
                title='Não'
                type='NEGATIVE'
              />
            </DoubleViewColumnsContent>
          </DoubleViewColumnsContainer>

        </EditMealPageContent>
      </EditMealPageContainer>

      <Footer>
        <FooterContainer>
          <Button
            title='Salvar alterações'
            variant='PRIMARY'
            onPress={handleNavigateToMealPage}
          />
        </FooterContainer>
      </Footer>
    </>
  );
}
