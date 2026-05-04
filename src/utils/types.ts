export interface MacroCardProps {
    label?: string
    consumed?: number
    total?: number
}

export interface RecentMealProps {
    mealId?: string
    mealName?: string
    calories?: number
    protein?: number
    carbs?: number
    fats?: number
    getLatestMeals?: () => void
    deleteBtn?: boolean
}

export interface MealDetailsKeys {
    id?: string
    createdAt?: string
    mealName?: string,
    calories?: number,
    protein?: number,
    carbs?: number,
    fats?: number,
}

export interface RecentGridProps {
    meals?: MealDetailsKeys[]
    getLoadedMeals?: () => void
}

export const initialMacrosValue = { calories: 0, protein: 0, carbs: 0, fats: 0 }