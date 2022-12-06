import { Feather } from '@expo/vector-icons';
import { TouchableOpacityProps } from 'react-native';
import { Container, Icon } from './styles';

type ArrowIconProps = TouchableOpacityProps & {
  variant?: 'DEFAULT' | 'PRIMARY' | 'SECONDARY'
  icon: keyof typeof Feather.glyphMap
}

export function ArrowIcon({ icon, variant = 'DEFAULT', ...rest }: ArrowIconProps){
  return (
    <Container {...rest}>
      <Icon name={icon} variant={variant} />
    </Container>
  );
}
