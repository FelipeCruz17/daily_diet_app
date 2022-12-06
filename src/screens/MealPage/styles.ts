import { SafeAreaView } from 'react-native-safe-area-context';
import { Platform, StatusBar } from 'react-native';
import styled, { css } from 'styled-components/native';

const isAndroid = Platform.OS === 'android';

type MealPageContainerStyleProps = {
  variant: 'DEFAULT' | 'POSITIVE' | 'NEGATIVE'
}

export const MealPageContainer = styled(SafeAreaView)<MealPageContainerStyleProps>`
  background-color: ${({theme, variant}) => {
    switch (variant) {
    case 'POSITIVE':
      return theme.COLORS.BRAND_GREEN_LIGHT;
    case 'NEGATIVE':
      return theme.COLORS.BRAND_RED_LIGHT;
    default:
      return theme.COLORS.BASE_GRAY_500;
    }
  }};
  flex: 1;
`;

export const MealPageContent = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.COLORS.BASE_GRAY_700};
  padding: 24px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  box-shadow: 0 0 30px rgba(0, 0, 0, ${isAndroid ? 1 : 0.1});
  elevation: 3;
`;

export const MealPageName = styled.Text`
  ${({theme}) => css`
    color: ${theme.COLORS.BASE_GRAY_100};
    font-size: ${theme.FONT_SIZE.TITLE_S}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const MealPageDescription = styled.Text`
  ${({theme}) => css`
    color: ${theme.COLORS.BASE_GRAY_200};
    font-size: ${theme.FONT_SIZE.BODY_M}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}

  margin-top: 8px;
`;

export const MealPageTimeAndDateTitle = styled.Text`
  ${({theme}) => css`
    color: ${theme.COLORS.BASE_GRAY_100};
    font-size: ${theme.FONT_SIZE.TITLE_XS}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}

  margin-top: 32px;
`;

export const MealPageTimeAndDate = styled.Text`
  ${({theme}) => css`
    color: ${theme.COLORS.BASE_GRAY_200};
    font-size: ${theme.FONT_SIZE.BODY_M}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}

  margin-top: 8px;
`;

export const MealPageTagContainer = styled.View`
  align-self: flex-start;
  align-items: center;
  background-color: ${({theme}) => theme.COLORS.BASE_GRAY_600};
  padding: 8px 16px;
  border-radius: 1000px;
  margin: 32px 0;
  flex-direction: row;
`;

export const MealPageTagText = styled.Text`
  ${({theme}) => css`
    color: ${theme.COLORS.BASE_GRAY_100};
    font-size: ${theme.FONT_SIZE.BODY_S}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}

  margin-left: 8px;
`;

type MealPageTagStatusStyleProps = {
  type: 'POSITIVE' | 'NEGATIVE'
}

export const MealPageTagStatus = styled.View<MealPageTagStatusStyleProps>`
  ${({ theme, type}) => css`
    background-color: ${type === 'POSITIVE' ? theme.COLORS.BRAND_GREEN_DARK : theme.COLORS.BRAND_RED_DARK};
  `}

  width: 8px;
  height: 8px;
  border-radius: 999px;
`;

export const Footer = styled.View`
  min-height: 110px;
  padding: ${isAndroid ? `${StatusBar.currentHeight}px`: '16px'} 24px;
  background-color: ${({theme}) => theme.COLORS.BASE_GRAY_700};
`;

export const FooterContainer = styled.SafeAreaView``;
