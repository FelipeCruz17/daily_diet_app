import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { HeadingContainer, HeadingTitle } from './styles';
import { ArrowIcon } from '@components/ArrowIcon';

interface HeadingProps {
  title: string;
  variant?: 'DEFAULT' | 'POSITIVE' | 'NEGATIVE'
}

export function Heading({ title, variant = 'DEFAULT' }: HeadingProps) {
  const navigation = useNavigation();

  function handleGoBackHomePage(){
    navigation.goBack();
  }
  return (
    <HeadingContainer variant={variant}>

      <ArrowIcon
        icon='arrow-left'
        variant='DEFAULT'
        onPress={handleGoBackHomePage}
      />

      <HeadingTitle>
        {title}
      </HeadingTitle>

      <View style={{
        width: 24
      }} />
    </HeadingContainer>
  );
}
