import { MealDetailsKeys } from '@/utils/types'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const getMeals = async () => {
    // Because reading from a phone's disk isn't instant, AsyncStorage.getItem returns a Promise. If you don't tell the code to stop and wait, fetchMeals will just be a "pending promise" instead of the actual data.
    const fetchMeals = await AsyncStorage.getItem('meals')
    return fetchMeals ? JSON.parse(fetchMeals) : []
}

export const addMeal = async (newMeal: MealDetailsKeys) => {
    // Since getMeals is an async function, you must await it. Otherwise, existingMeals becomes a Promise, and you can't "spread" a Promise into an array

    // You need to add the parentheses () to actually execute getMeals
    const existingMeals = await getMeals()

    const mealWithId = { ...newMeal, id: Date.now().toString() }
    const updatedMeals = [mealWithId, ...existingMeals]

    const finalMeals = JSON.stringify(updatedMeals)
    // Also, since setItem is a disk operation, you should await it to make sure the save finishes!
    await AsyncStorage.setItem('meals', finalMeals)

    return newMeal
}

export const deleteMeal = async (id?: string) => {
    const getAllMeals = await getMeals()
    const filtered = getAllMeals?.filter((meal: MealDetailsKeys) => meal?.id !== id)
    await AsyncStorage.setItem('meals', JSON.stringify(filtered))
}

export const clearAllMeals = async () => {
    // If you set it to an empty string (''), then JSON.parse('') will throw a syntax error and crash your app because an empty string isn't valid JSON.
    await AsyncStorage.setItem('meals', JSON.stringify([]))
}

// Notice every function says async and uses await. This is because reading/writing to a phone's disk takes a tiny bit of time. await ensures the app waits for the save to finish before moving on, so you don't lose data.