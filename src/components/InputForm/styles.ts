import styled, { css } from 'styled-components/native';
import { TextInput } from 'react-native';

export const InputContainer = styled(TextInput)`
  border-radius: 6px;
  padding: 14px;

  ${({theme}) => css`
    border: 1px solid ${theme.COLORS.BASE_GRAY_500};
    font-size: ${theme.FONT_SIZE.BODY_M}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.BASE_GRAY_100};
  `}
`;
