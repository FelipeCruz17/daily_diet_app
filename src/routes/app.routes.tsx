import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from 'src/@types/navigation';

import { Home } from '@screens/Home';
import { Statistics } from '@screens/Statistics';
import { CreateMeal } from '@screens/CreateMeal';
import { Feedback } from '@screens/FeedBack';
import { Meal } from '@screens/Meal';
import { EditMeal } from '@screens/EditMeal';

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

export function AppRoutes(){
  return (
    <Navigator
      screenOptions={{ headerShown: false }}
    >
      <Screen name="Home" component={Home}/>
      <Screen name="Statistics" component={Statistics}/>
      <Screen name="CreateMeal" component={CreateMeal}/>
      <Screen name="Feedback" component={Feedback}/>
      <Screen name="Meal" component={Meal}/>
      <Screen name="EditMeal" component={EditMeal}/>
    </Navigator>
  );
}
