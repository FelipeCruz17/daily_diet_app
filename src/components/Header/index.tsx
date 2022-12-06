import { useNavigation } from "@react-navigation/native";
import { DietVariant } from "@screens/Home";
import { Container, IconContainer, StyledIcon, Title } from './styles';

type Props = {
  title: string;
  variant?: DietVariant;
}
export function Header({ title, variant }: Props){
  const navigation = useNavigation();

  function handleGoback(){
    navigation.goBack();
  }

  return (
    <Container variant={variant}>
      
      <IconContainer onPress={handleGoback}>
        <StyledIcon />
      </IconContainer>

      <Title>{title}</Title>
      
    </Container>
  );
}