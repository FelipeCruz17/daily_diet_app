import { TouchableOpacityProps } from 'react-native';
import { RadioButtonDietStatusContainer, RadioButtonStatusIcon, RadioButtonStatusText } from './styles';

type RadioButtonDietStatusProps = TouchableOpacityProps & {
  title: string
  isActive?: boolean
  type: 'POSITIVE' | 'NEGATIVE'
}

export function RadioButtonDietStatus({title, isActive = false, type, ...rest}: RadioButtonDietStatusProps){
  return (
    <RadioButtonDietStatusContainer
      isActive={isActive}
      type={type}
      {...rest}
    >
      <RadioButtonStatusIcon type={type} />
      <RadioButtonStatusText>
        {title}
      </RadioButtonStatusText>
    </RadioButtonDietStatusContainer>
  );
}
