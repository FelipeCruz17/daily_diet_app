import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

type ButtonIconStyleProps = 'DEFAULT' | 'PRIMARY' | 'SECONDARY';

type Props = {
  variant: ButtonIconStyleProps
}

export const Container = styled(TouchableOpacity)``;

export const Icon = styled(Feather).attrs<Props>(({ theme, variant }) => ({
  size: 24,
  color: variant === 'DEFAULT' ? theme.COLORS.BASE_GRAY_200
    : variant === 'PRIMARY' ? theme.COLORS.BRAND_GREEN_DARK
      : theme.COLORS.BRAND_RED_DARK
}))``;
