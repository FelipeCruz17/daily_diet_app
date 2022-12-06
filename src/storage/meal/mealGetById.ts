import { mealGetAll } from './mealGetMeals';

export async function mealGetById(mealId: string) {
  try {
    const storage = await mealGetAll();
    const mealById = storage.filter(meal => meal.id === mealId);

    return mealById;
  } catch (error) {
    throw error;
  }
}
