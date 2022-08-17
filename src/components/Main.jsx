import React from 'react'
import Constants from 'expo-constants'
import { Text, View } from 'react-native'
import { Route, Routes, NativeRouter } from 'react-router-native'

import RepositoriesList from './RepositoriesList'
import AppBar from './AppBar'
import Login from '../pages/Login'

const Main = () => {
  return (
    <View style={{ marginBottom: Constants.statusBarHeight * 2 + 6 ,flexGrow: 1 }}>
      <AppBar />
      <Routes>
        <Route path='/' exact element={<RepositoriesList/>}/>  
        <Route path='/signin' element={<Login/>} />
      </Routes>
    </View>
  )
}

export default Main