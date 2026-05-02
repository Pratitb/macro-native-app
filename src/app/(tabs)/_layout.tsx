import { colors } from "@/styles/global"
import { Tabs } from "expo-router"
import { CirclePlus, House, Utensils } from 'lucide-react-native'

const TabLayout = () => {
    return (
        <Tabs screenOptions={{ headerShown: false, tabBarActiveTintColor: `${colors?.blue}`, tabBarInactiveTintColor: `${colors?.gray}`, tabBarStyle: { paddingTop: 5 }, tabBarLabelStyle: { fontSize: 14 } }}>
            <Tabs.Screen name="index" options={{ title: 'Home', tabBarIcon: ({ color, size }) => <House color={color} /> }} />
            <Tabs.Screen name="meals" options={{ title: 'Meals', tabBarIcon: ({ color, size }) => <Utensils color={color} /> }} />
            <Tabs.Screen name="addMeal" options={{ title: 'Add Meal', tabBarIcon: ({ color, size }) => <CirclePlus color={color} /> }} />
        </Tabs>
    )
}

export default TabLayout