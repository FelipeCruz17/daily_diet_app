import styled, { css } from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

interface MealsCardCircleStatusProps {
  variant: 'POSITIVE' | 'NEGATIVE'
}

export const MealsCardContainer = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  padding: 14px 16px;
  border-radius: 6px;
  border: 1px solid ${({theme}) => theme.COLORS.BASE_GRAY_500};
  margin: 4px 0;
`;

export const MealsCardTime = styled.Text`
  ${({theme}) => css`
    color: ${theme.COLORS.BASE_GRAY_100};
    font-size: ${theme.FONT_SIZE.BODY_XS}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const Divider = styled.View`
  background-color: ${({theme}) => theme.COLORS.BASE_GRAY_400};
  width: 1px;
  height: 14px;
  margin: 0 14px;
`;

export const MealsCardTitle = styled.Text`
  flex: 1;
  ${({theme}) => css`
    color: ${theme.COLORS.BASE_GRAY_200};
    font-size: ${theme.FONT_SIZE.BODY_M}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;

export const MealsCardCircleStatusIcon = styled(FontAwesome).attrs<MealsCardCircleStatusProps>(({theme, variant}) => ({
  size: 14,
  color: variant === 'POSITIVE' ? theme.COLORS.BRAND_GREEN_MID : theme.COLORS.BRAND_RED_MID
}))``;
