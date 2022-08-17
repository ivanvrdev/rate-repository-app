import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Link, useLocation } from 'react-router-native'

import StyledText from './StyledText'
import Constants from 'expo-constants'
import theme from '../themes'



const styles =  StyleSheet.create({
    container: {
        backgroundColor: theme.appBar.primary,
        paddingTop: Constants.statusBarHeight + 10,
        paddingBottom: 10,
        paddingLeft: 10,
        flexDirection: 'row',
    },
    text: {
        color: theme.appBar.textSecondary,
        paddingHorizontal: 10
    },
    active: {
        color: theme.appBar.textPrimary
    }

})

const AppBarTap = ({children, to}) =>{

    const { pathname } = useLocation()

    const tapStyles = [
        styles.text,
        pathname === to && styles.active
    ]

    return (
        <Link to={to}>
            <StyledText fontWeight='bold' style={tapStyles}>
                {children}
            </StyledText>
        </Link>
    )
}

const AppBar = () => {
  return (
    <View style={styles.container}>
        <AppBarTap to='/'>
            Repositorios
        </AppBarTap>
        <AppBarTap to='/signin'>
            Iniciar sesión
        </AppBarTap>
    </View>
  )
}

export default AppBar