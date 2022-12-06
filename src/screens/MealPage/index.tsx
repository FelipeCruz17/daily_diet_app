import { Alert, View } from 'react-native';
import { mealRemove } from '@storage/meal/mealRemove';
import { useNavigation, useRoute } from '@react-navigation/native';
import { PencilSimpleLine, Trash } from 'phosphor-react-native';
import { useTheme } from 'styled-components/native';

import { Button } from '@components/Button';
import { Heading } from '@components/Heading';

import { MealPageContainer , MealPageContent, MealPageName, MealPageDescription, MealPageTimeAndDateTitle, MealPageTimeAndDate, MealPageTagContainer, MealPageTagText, MealPageTagStatus, Footer, FooterContainer } from './styles';

type RouteParams = {
  id: string
}

export function MealPage() {
  const {COLORS} = useTheme();
  const navigation = useNavigation();
  const route = useRoute();
  const {
    id
  } = route.params as RouteParams;

  function handleNavigateToEditMeal(){
    navigation.navigate('edit', {
      id: ''
    });
  }

  // async function handleRemoveMeal(mealId: string){
  //   try {
  //     await mealRemove(mealId);
  //   } catch (error) {
  //     console.log(error);
  //     Alert.alert('Remover refeição', 'Não foi possível remover a refeição');
  //   }
  // }

  return (
    <>
      <MealPageContainer variant='POSITIVE'>
        <Heading title='Refeição' variant='POSITIVE'/>

        <MealPageContent>
          <MealPageName>
            {/* {name} */}
            NAME
          </MealPageName>

          <MealPageDescription>
            {/* {description} */}
            DESCRIPTION
          </MealPageDescription>

          <MealPageTimeAndDateTitle>
          Data e hora
          </MealPageTimeAndDateTitle>

          <MealPageTimeAndDate>
            {/* {date} */}
            DATE
          </MealPageTimeAndDate>

          <MealPageTagContainer>
            <MealPageTagStatus type='POSITIVE' />
            <MealPageTagText>
              {/* {isMealInDiet} */}
              BOOLEAN
            </MealPageTagText>
          </MealPageTagContainer>
        </MealPageContent>
      </MealPageContainer>

      <Footer>
        <FooterContainer>
          <Button
            title='Editar refeição'
            variant='PRIMARY'
            icon={<PencilSimpleLine size={18} color={COLORS.WHITE} />}
            onPress={handleNavigateToEditMeal}
          />
          <View style={{ height: 8 }}/>
          <Button
            title='Excluir refeição'
            variant='SECONDARY'
            icon={<Trash size={18} color={COLORS.BASE_GRAY_100} />}
          />
        </FooterContainer>
      </Footer>
    </>
  );
}
