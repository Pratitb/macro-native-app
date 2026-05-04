import { deleteMeal } from "@/storage/mealsStorage"
import { colors, global } from "@/styles/global"
import { RecentMealProps } from "@/utils/types"
import { Trash } from "lucide-react-native"
import { StyleSheet, Text, View } from "react-native"

const RecentMeal = ({ mealId, mealName, calories, protein, carbs, fats, getLatestMeals, deleteBtn }: RecentMealProps) => {

    const handleDeleteMeal = async (mealId?: string) => {
        await deleteMeal?.(mealId)
        getLatestMeals?.()
    }
    return (
        <View style={[global?.header, styles?.wrap]}>
            <View>
                <Text style={global?.label}>{mealName}</Text>
                <View style={styles?.macros}>
                    <Text>{calories} <Text style={styles?.unit}>cal</Text></Text>
                    <Text>{protein}g <Text style={styles?.unit}>P</Text></Text>
                    <Text>{carbs}g <Text style={styles?.unit}>C</Text></Text>
                    <Text>{fats}g <Text style={styles?.unit}>F</Text></Text>
                </View>
            </View>
            {deleteBtn ? <Trash color={colors?.red} size={20} style={styles?.icon} onPress={() => handleDeleteMeal?.(mealId)} /> : ''}
        </View>
    )
}

const styles = StyleSheet.create({
    wrap: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    mealName: {
        fontSize: 18,
        textTransform: 'capitalize',
        fontWeight: 500,
    },
    macros: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
    },
    unit: {
        color: `${colors?.blue}`,
        textTransform: 'capitalize',
        fontWeight: 600,
    },
    icon: {
        cursor: 'pointer',
    },
})

export default RecentMeal