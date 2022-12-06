import { TouchableOpacityProps } from 'react-native';
import { MealsCardContainer, MealsCardTime, Divider, MealsCardTitle, MealsCardCircleStatusIcon } from './styles';

interface MealsCardProps extends TouchableOpacityProps{
  time: string
  name: string
  statusIsOnDiet: boolean
}

export function MealsCard({time, name, statusIsOnDiet, ...rest}: MealsCardProps){
  return (
    <MealsCardContainer {...rest}>
      <MealsCardTime>
        {time}
      </MealsCardTime>

      <Divider />

      <MealsCardTitle>
        {name}
      </MealsCardTitle>

      {statusIsOnDiet ? (
        <MealsCardCircleStatusIcon
          name='circle'
          variant='POSITIVE'
        />
      ) : (
        <MealsCardCircleStatusIcon
          name='circle'
          variant='NEGATIVE'
        />
      )}

    </MealsCardContainer>
  );
}
