import styled, { css } from 'styled-components/native';

export const LabelText =styled.Text`
  ${({theme}) => css`
    color: ${theme.COLORS.BASE_GRAY_200};
    font-size: ${theme.FONT_SIZE.TITLE_XS}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}

  margin-bottom: 4px;
  margin-top: 24px;
`;
