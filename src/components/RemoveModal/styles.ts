import styled, { css } from 'styled-components/native';

export const Overlay = styled.KeyboardAvoidingView`
  background-color: rgba(0, 0, 0, 0.6);
  flex: 1;
  align-items: stretch;
  justify-content: center;
  padding: 0 24px;
`;

export const ModaBody = styled.View`
  background-color: ${({theme}) => theme.COLORS.BASE_GRAY_700};
  border-radius: 8px;
  padding: 24px;
`;

export const ModalTitle = styled.Text`
  ${({theme}) => css`
    color: ${theme.COLORS.BASE_GRAY_200};
    font-size: ${theme.FONT_SIZE.TITLE_S}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
`;
