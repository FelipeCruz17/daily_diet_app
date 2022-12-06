import { SafeAreaView } from 'react-native-safe-area-context';
import { Platform, StatusBar } from 'react-native';
import styled from 'styled-components/native';

const isAndroid = Platform.OS === 'android';

export const EditMealPageContainer = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({theme}) => theme.COLORS.BASE_GRAY_500};
`;

export const EditMealPageContent = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.COLORS.BASE_GRAY_700};
  padding: 0 24px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  box-shadow: 0 0 30px rgba(0, 0, 0, ${isAndroid ? 1 : 0.1});
  elevation: 3;
`;

export const DoubleViewColumnsContainer = styled.View`
  flex-direction: row;
`;

export const DoubleViewColumnsContent = styled.View`
  flex: 1;
`;

export const Footer = styled.View`
  min-height: 110px;
  padding: ${isAndroid ? `${StatusBar.currentHeight}px`: '16px'} 24px;
  background-color: ${({theme}) => theme.COLORS.BASE_GRAY_700};
`;

export const FooterContainer = styled.SafeAreaView``;
