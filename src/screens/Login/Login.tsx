import React from 'react'
import { TextInput, SafeAreaView, View, Text, Touchable, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '@/navigation/Navigation'

//Imports
import { RoundedButton } from '@/components/RoundedButton/RoundedButton'
import { Input } from '@/components/Input/Input'

export const LoginScreen = () => {

    const { navigate } = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    return (
        <SafeAreaView className='flex items-center'>

            <View className='flex items-center gap-4 mt-64'>
                <View>
                    <Input text='Correo electronico' />
                </View>
                <View>
                    <Input text='Contraseña' password={true} />
                </View>

                <View>
                    <Text>No tienes cuenta?</Text>
                    <TouchableOpacity onPress={() => navigate("Register")}>
                        <Text>Register</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View className='mt-4'>
                <RoundedButton
                    text='Entrar'
                    onPress={() => { }}
                />
            </View>

        </SafeAreaView>
    )
}
