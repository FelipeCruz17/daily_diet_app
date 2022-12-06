import { ViewProps } from 'react-native';
import { GeneralStatisticsContainer, GeneralStatisticsDescription, GeneralStatisticsNumber } from './styles';

type GeneralStatisticsCardProps = ViewProps & {
  variant?: 'DEFAULT' | 'POSITIVE' | 'NEGATIVE'
  number: number
  description: string
}

export function GeneralStatisticsCard({ number, description, variant = 'DEFAULT', ...rest }: GeneralStatisticsCardProps) {
  return (
    <GeneralStatisticsContainer variant={variant} {...rest}>
      <GeneralStatisticsNumber>
        {number}
      </GeneralStatisticsNumber>
      <GeneralStatisticsDescription>
        {description}
      </GeneralStatisticsDescription>
    </GeneralStatisticsContainer>
  );
}
