import AsyncStorage from '@react-native-async-storage/async-storage';
import { MEAL_COLLECTION } from '../storageConfig';
import { mealGetById } from './mealGetById';

export async function mealRemove(mealId: string) {
  try {
    const storage = await mealGetById(mealId);

    const mealFiltered = storage.filter(meal => meal.id !== mealId);

    const meals = JSON.stringify(mealFiltered);

    await AsyncStorage.setItem(MEAL_COLLECTION, meals);

  } catch (error) {
    throw error;
  }
}
