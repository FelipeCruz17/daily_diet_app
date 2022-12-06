import styled, { css } from 'styled-components/native';

type GeneralStatisticsContainerProps = {
  variant: 'DEFAULT' | 'POSITIVE' | 'NEGATIVE'
}

export const GeneralStatisticsContainer = styled.View<GeneralStatisticsContainerProps>`
  background-color: ${({ theme, variant }) => {
    switch (variant) {
    case 'POSITIVE':
      return theme.COLORS.BRAND_GREEN_LIGHT;
    case 'NEGATIVE':
      return theme.COLORS.BRAND_RED_LIGHT;
    default:
      return theme.COLORS.BASE_GRAY_600;
    }
  }};
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  padding: 16px;
  width: 100%;
  margin-top: 18px;
`;


export const GeneralStatisticsNumber = styled.Text`
  text-align: center;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.TITLE_M}px;
    color: ${theme.COLORS.BASE_GRAY_100};
  `};
`;

export const GeneralStatisticsDescription = styled.Text`
  text-align: center;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.BODY_S}px;
    color: ${theme.COLORS.BASE_GRAY_200};
  `};
`;
