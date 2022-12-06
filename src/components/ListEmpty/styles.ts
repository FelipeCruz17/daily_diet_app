import styled, { css } from 'styled-components/native';

export const ListEmptyContainer = styled.View`
  flex: 1;

  justify-content: center;
  align-items: center;
`;

export const Message = styled.Text`
  text-align: center;
  ${({theme}) => css`
    color: ${theme.COLORS.BASE_GRAY_100};
    font-size: ${theme.FONT_SIZE.BODY_M}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;
