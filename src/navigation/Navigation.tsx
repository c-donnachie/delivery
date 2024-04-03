import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import RegisterScreen from '@/screens/Register/Register';
import { LoginScreen } from '@/screens/Login/Login';

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
      headerShown: false
    }}
    >
      <Stack.Screen
        name='Login'
        component={LoginScreen}
      />
      <Stack.Screen
        name='Register'
        component={RegisterScreen}
        options={{
          headerShown: true,
          title: 'Nuevo usuario'
        }}
      />
    </Stack.Navigator>
  )
}
export default function Navigation() {

  return (

    <NavigationContainer>
      <HomeStack />
      <StatusBar style="auto" />
    </NavigationContainer>

  );
}
