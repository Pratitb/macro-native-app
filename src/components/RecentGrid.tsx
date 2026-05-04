import { global } from "@/styles/global"
import { RecentGridProps } from "@/utils/types"
import { ScrollView, StyleSheet, Text, View } from "react-native"
import RecentMeal from "./RecentMeal"

const RecentGrid = ({ meals, getLoadedMeals }: RecentGridProps) => {
    return (
        <View style={styles?.recentWrap}>
            <Text style={global?.head}>recent meals</Text>
            <ScrollView style={styles?.mealsWrap} contentContainerStyle={{ gap: 10, justifyContent: 'space-between' }}>
                {meals?.slice(0, 3)?.map((mealItem) => <RecentMeal key={mealItem?.id} mealId={mealItem?.id} mealName={mealItem?.mealName} calories={mealItem?.calories} protein={mealItem?.protein} carbs={mealItem?.carbs} fats={mealItem?.fats} getLatestMeals={getLoadedMeals} />)}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    recentWrap: {
        marginTop: 36,
    },
    mealsWrap: {
        // marginTop: 10,
    },
})

export default RecentGrid