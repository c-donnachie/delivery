import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

interface Props {
    text: string
    onPress: () => void
}

export const RoundedButton: React.FC<Props> = ({ text, onPress }) => {
    return (
        <TouchableOpacity
            className='bg-red-400 w-60 h-12 rounded-xl flex justify-center items-center'
            onPress={() => onPress}
        >
            <Text className='text-lg font-bold'>{text}</Text>

        </TouchableOpacity>
    )
}