import React from 'react'
import { StyleSheet ,Text } from 'react-native'
import theme from '../themes'

const styles = StyleSheet.create({
    text: {
        fontSize: theme.fontSizes.body,
        color: theme.colors.textPrimary,
        fontFamily: theme.fonts.main,
        fontWeight: theme.fontWeights.normal
    },
    colorPrimary:{
        color: theme.colors.primary
    },
    colorSecondary: {
        color: theme.colors.textSecondary
    },
    bold: {
        fontWeight: theme.fontWeights.bold
    },
    subheading: {
        fontSize: theme.fontSizes.subheading
    },
    textAlignCenter: {
        textAlign: 'center'
    },
    bordered: {
        backgroundColor: theme.colors.primary,
        color: 'white',
        paddingHorizontal: 3,
        borderRadius: 2
    }
})

const StyledText = ({children, color, fontSize, fontWeight, align, bordered, style, ...restOfProps}) => {

    const textStyles = [
        styles.text,
        color === 'primary' && styles.colorPrimary,
        color === 'secondary' && styles.colorSecondary,
        fontSize === 'subheading' && styles.subheading,
        fontWeight === 'bold' && styles.bold,
        align === 'center' && styles.textAlignCenter,
        bordered && styles.bordered,
        style
    ]

    return (
        <Text style={textStyles} {...restOfProps}>
            {children}
        </Text>
    )
}

export default StyledText