import { View, StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { 
  useFonts, 
  Nunito_400Regular, 
  Nunito_700Bold,
} from '@expo-google-fonts/nunito';
import theme from '@theme/index';
import { Routes } from '@routes/index';

export default function App(){
  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold,
  });

  if(!fontsLoaded){
    return null;
  }
  return (
    <ThemeProvider theme={theme}>
      <View style={{ flex: 1 }}> 
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
        <Routes/>
      </View>
    </ThemeProvider>
  )
}