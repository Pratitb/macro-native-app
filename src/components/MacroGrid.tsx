import { StyleSheet, View } from "react-native"
import MacroCard from "./MacroCard"

const MacroGrid = () => {
    return (
        <View style={styles?.gridWrap}>
            <MacroCard label="calories" consumed={1600} total={2000} />
            <MacroCard label="protein" consumed={50} total={130} />
            <MacroCard label="carbs" consumed={140} total={250} />
            <MacroCard label="fats" consumed={25} total={65} />
        </View>
    )
}

const styles = StyleSheet.create({
    gridWrap: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 16,
    }
})

export default MacroGrid