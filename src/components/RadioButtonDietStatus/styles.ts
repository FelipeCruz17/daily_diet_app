import styled, { css } from 'styled-components/native';

type RadioButtonDietStatusContainerStyleProps = {
  isActive: boolean
  type: 'POSITIVE' | 'NEGATIVE'
}

export const RadioButtonDietStatusContainer = styled.TouchableOpacity<RadioButtonDietStatusContainerStyleProps>`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 16px;
  border-radius: 6px;

  ${({theme, isActive, type }) => type === 'POSITIVE' && css`
    background-color: ${isActive ? theme.COLORS.BRAND_GREEN_LIGHT : theme.COLORS.BASE_GRAY_600};
    border: 1px solid ${isActive ? theme.COLORS.BRAND_GREEN_DARK : theme.COLORS.BASE_GRAY_600}
  `};
  ${({theme, isActive, type }) => type === 'NEGATIVE' && css`
    background-color: ${isActive ? theme.COLORS.BRAND_RED_LIGHT : theme.COLORS.BASE_GRAY_600};
    border: 1px solid ${isActive ? theme.COLORS.BRAND_RED_DARK : theme.COLORS.BASE_GRAY_600}
  `}
`;

type RadioButtonStatusIconStyleProps = {
  type: 'POSITIVE' | 'NEGATIVE'
}

export const RadioButtonStatusIcon = styled.View<RadioButtonStatusIconStyleProps>`
  ${({ theme, type }) => css`
    background-color: ${type === 'POSITIVE' ? theme.COLORS.BRAND_GREEN_DARK : theme.COLORS.BRAND_RED_DARK};
  `}

  width: 8px;
  height: 8px;
  border-radius: 999px;
`;

export const RadioButtonStatusText =styled.Text`
  ${({theme}) => css`
    color: ${theme.COLORS.BASE_GRAY_100};
    font-size: ${theme.FONT_SIZE.TITLE_XS}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}

  margin-left: 8px;
`;
