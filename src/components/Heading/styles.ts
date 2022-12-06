import styled, { css } from 'styled-components/native';

type HeadingContainerProps = {
  variant: 'DEFAULT' | 'POSITIVE' | 'NEGATIVE'
}

export const HeadingContainer = styled.View<HeadingContainerProps>`
  background-color: ${({theme, variant}) => {
    switch(variant){
    case 'POSITIVE':
      return theme.COLORS.BRAND_GREEN_LIGHT;
    case 'NEGATIVE':
      return theme.COLORS.BRAND_RED_LIGHT;
    default:
      return theme.COLORS.BASE_GRAY_500;
    }
  }};
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding: 32px 24px;
`;

export const HeadingTitle = styled.Text`
  ${({theme}) => css`
    color: ${theme.COLORS.BASE_GRAY_100};
    font-size: ${theme.FONT_SIZE.TITLE_S}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}

  flex: 1;
  text-align: center;
`;
