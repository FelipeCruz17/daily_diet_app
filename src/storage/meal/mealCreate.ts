import AsyncStorage from '@react-native-async-storage/async-storage';
import { Meal } from 'src/types/IMeal';
import { mealGetAll } from './mealGetMeals';
import { MEAL_COLLECTION } from '../storageConfig';


export async function mealCreate(newMeal: Meal) {
  try {
    const storedMeals = await mealGetAll();

    const storageStringify = JSON.stringify([...storedMeals, newMeal]);

    await AsyncStorage.setItem(MEAL_COLLECTION, storageStringify);
  } catch (error) {
    throw error;
  }
}
