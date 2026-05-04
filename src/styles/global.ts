import { StyleSheet } from "react-native"

export const colors = {
    bg: '#F5F5F5',
    darkBg: '#0a0a0a',
    cardBg: '#FFFFFF',

    white: '#FFFFFF',

    primaryText: '#000000',
    black: '#000000',
    secondaryText: '#999999',
    gray: '#999999',

    buttonBg: '#000000',
    buttonText: '#FFFFFF',

    linkColor: '#1E88E5',
    blue: '#1E88E5',
    red: '#E53935',

    radius: 24
}

export const global = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 80,
        paddingHorizontal: 20,
        backgroundColor: `${colors?.bg}`
    },
    header: {
        backgroundColor: `${colors?.cardBg}`,
        borderRadius: 24,
        padding: 16,
        paddingHorizontal: 18,
    },
    head: {
        fontSize: 24,
        fontWeight: 600,
        marginBottom: 20,
        textTransform: 'capitalize',
        // textDecorationLine: 'underline',
        // textDecorationStyle: 'dotted',
    },
    link: {
        fontSize: 20,
        fontWeight: 600,
        color: `${colors?.linkColor}`,
        marginTop: 20,
        paddingHorizontal: 10,
        textTransform: 'capitalize',
        cursor: 'pointer',
    },
    label: {
        fontSize: 18,
        fontWeight: 600,
        marginBottom: 4,
        color: `${colors?.black}`,
        textTransform: 'capitalize',
    },
    btn: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 15,
        borderRadius: 16,
        marginTop: 30,
        backgroundColor: `${colors?.black}`,
    },
    btnText: {
        fontSize: 16,
        fontWeight: 600,
        letterSpacing: 1,
        color: `${colors?.white}`,
        textTransform: 'capitalize',
    }
})