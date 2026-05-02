import { colors, global } from "@/styles/global"
import { MacroCardProps } from "@/utils/types"
import { StyleSheet, Text, View } from "react-native"

const MacroCard = ({ label, consumed, total }: MacroCardProps) => {
    return (
        <View style={styles?.card}>
            <Text style={global?.label} numberOfLines={1}>{label}</Text>
            <Text style={styles?.consumed}>{consumed} <Text style={styles?.total}>/&nbsp;{total}</Text></Text>

        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        flexGrow: 1,
        flexShrink: 0,
        borderRadius: 24,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: `${colors?.cardBg}`
    },
    consumed: {
        fontSize: 20,
        fontWeight: 600,
        color: `${colors?.red}`
    },
    total: {
        fontSize: 15,
        color: `${colors?.gray}`
    }
})

export default MacroCard