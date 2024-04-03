import React from 'react'
import { Text, SafeAreaView } from 'react-native'

//Screens
import { LoginScreen } from '@/screens/Login/Login';


interface Props {
  title: string
  desc?: string
}

function identity<T>(arg: T): T {
  return arg;
}

export const HomeScreen= () => {
  return (
    <LoginScreen/>
  )
}
