import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Alert, View } from 'react-native';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { mealCreate } from '@storage/meal/mealCreate';

import { Button } from '@components/Button';
import { Heading } from '@components/Heading';
import { InputForm } from '@components/InputForm';
import { LabelForm } from '@components/LabelForm';
import { RadioButtonDietStatus } from '@components/RadioButtonDietStatus';

import { NewMealPageContainer, NewMealPageContent, DoubleViewColumnsContainer, DoubleViewColumnsContent, Footer, FooterContainer } from './styles';
import { AppError } from '@utils/AppError';


export function NewMealPage(){
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [selectedStatusDiet, setSelectedStatusDiet] = useState<'POSITIVE' | 'NEGATIVE' | null>(null);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const navigation = useNavigation();
  // const route = useRoute();


  function showDatePicker(){
    setDatePickerVisibility(true);
  }

  function hideDatePicker(){
    setDatePickerVisibility(false);
  }

  function handleConfirmDate(date: Date) {
    setDate(date);
    hideDatePicker();
  }

  function showTimePicker(){
    setTimePickerVisibility(true);
  }

  function hideTimePicker(){
    setTimePickerVisibility(false);
  }

  function handleConfirmTime(time: Date) {
    setTime(time);
    hideDatePicker();
  }

  function handleSelectStatusDiet(type: 'POSITIVE' | 'NEGATIVE') {
    setSelectedStatusDiet(type);
  }

  const dateFormatted = format(date, 'dd/MM/yyyy', {
    locale: ptBR
  });

  const hours = String(time.getHours()).padStart(2, '0');
  const minutes = String(time.getMinutes()).padStart(2, '0');
  const timeFormatted = `${hours}:${minutes}`;

  async function handleNavigateToFeedback(){
    try {

      if (name.trim().length === 0) {
        return Alert.alert('Cadastrar refeição', 'Informe a refeição');
      }

      const newMeal = {
        id: String(new Date()),
        name,
        description,
        date: new Date(`${dateFormatted} ${timeFormatted}`),
        isMealInDiet: selectedStatusDiet === 'POSITIVE'? true : false
      };

      await mealCreate(newMeal);

      navigation.navigate('feedback', {
        isMealInDiet: newMeal.isMealInDiet
      });

      setName('');
      setDescription('');

    } catch (error) {
      if(error instanceof AppError){
        Alert.alert('Nova refeição', error.message);
      }
      console.log(error);
      Alert.alert('Nova refeição', 'Não foi possível adicionar a refeição');
    }
  }

  return(
    <>
      <NewMealPageContainer>
        <Heading title='Nova refeição' />

        <NewMealPageContent>
          <LabelForm label='Nome'/>
          <InputForm value={name} onChangeText={setName} />

          <LabelForm label='Descrição'/>
          <InputForm
            numberOfLines={4}
            multiline
            value={description}
            onChangeText={setDescription}
          />

          <DoubleViewColumnsContainer>
            <DoubleViewColumnsContent>
              <LabelForm label='Data'/>
              <InputForm
                value={dateFormatted}
                onPressIn={showDatePicker}
              />
              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirmDate}
                onCancel={hideDatePicker}
              />
            </DoubleViewColumnsContent>

            <View style={{width: 24}}/>

            <DoubleViewColumnsContent>
              <LabelForm label='Hora'/>
              <InputForm
                value={timeFormatted}
                onPressIn={showTimePicker}
              />
              <DateTimePickerModal
                isVisible={isTimePickerVisible}
                mode="time"
                onConfirm={handleConfirmTime}
                onCancel={hideTimePicker}
              />
            </DoubleViewColumnsContent>
          </DoubleViewColumnsContainer>

          <LabelForm label='Está dentro da dieta?' />

          <DoubleViewColumnsContainer>
            <DoubleViewColumnsContent>
              <RadioButtonDietStatus
                title='Sim'
                type='POSITIVE'
                isActive={selectedStatusDiet === 'POSITIVE'}
                onPress={() => handleSelectStatusDiet('POSITIVE')}
              />
            </DoubleViewColumnsContent>

            <View style={{width: 24}}/>

            <DoubleViewColumnsContent>
              <RadioButtonDietStatus
                title='Não'
                type='NEGATIVE'
                isActive={selectedStatusDiet === 'NEGATIVE'}
                onPress={() => handleSelectStatusDiet('NEGATIVE')}
              />
            </DoubleViewColumnsContent>
          </DoubleViewColumnsContainer>

        </NewMealPageContent>

      </NewMealPageContainer>

      <Footer>
        <FooterContainer>
          <Button
            title='Cadastrar refeição'
            variant='PRIMARY'
            onPress={handleNavigateToFeedback}
          />
        </FooterContainer>
      </Footer>
    </>

  );
}
