import { initialMacrosValue, MealDetailsKeys, RecentGridProps } from "@/utils/types"
import { useMemo } from "react"
import { ScrollView, StyleSheet } from "react-native"
import MacroCard from "./MacroCard"

const MacroGrid = ({ meals }: RecentGridProps) => {

    const storeAddition = useMemo(() => {
        const addition = meals?.reduce?.((acc: MealDetailsKeys, meal: MealDetailsKeys) => ({
            calories: (acc.calories ?? 0) + (meal?.calories ?? 0),
            protein: (acc?.protein ?? 0) + (meal?.protein ?? 0),
            carbs: (acc?.carbs ?? 0) + (meal?.carbs ?? 0),
            fats: (acc?.fats ?? 0) + (meal?.fats ?? 0),
        }), initialMacrosValue)
        return addition
    }, [meals])


    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={styles?.gridWrap}>
            <MacroCard label="calories" consumed={storeAddition?.calories} total={2000} />
            <MacroCard label="protein" consumed={storeAddition?.protein} total={130} />
            <MacroCard label="carbs" consumed={storeAddition?.carbs} total={250} />
            <MacroCard label="fats" consumed={storeAddition?.fats} total={65} />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    gridWrap: {
        flexDirection: 'row',
        // flexWrap: 'wrap',
        gap: 6,
    }
})

export default MacroGrid