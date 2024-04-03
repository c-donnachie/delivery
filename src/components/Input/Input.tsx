import React, { useState, useRef } from 'react';
import { TextInput, View, Text, TouchableNativeFeedback } from 'react-native';

interface Props {
    text: string;
    password?: boolean;
}

export const Input: React.FC<Props> = ({ text, password = false, ...rest }) => {
    const [value, setValue] = useState('');
    const [focus, setFocus] = useState(false);
    const inputRef = useRef<TextInput>(null);

    const handleInput = (input: string) => {
        setValue(input);
    };

    const handleFocus = () => {
        setFocus(true);
    };

    const handleBlur = () => {
        setFocus(false);
    };

    const handleReset = () => {
        setValue('');
        inputRef.current?.focus();
    };

    return (
        <View>
            <View
                className={`flex justify-center items-center w-4 h-4 absolute z-10 right-4 top-[18] ${value.length > 0 ? 'block' : 'hidden'}`}>
                <TouchableNativeFeedback
                    onPress={handleReset}
                >
                    <Text>X</Text>
                </TouchableNativeFeedback>
            </View>
            <TextInput
                className='w-72 h-14 bg-white rounded-xl pl-4'
                placeholder={text}
                value={value}
                onChangeText={handleInput}
                onFocus={handleFocus}
                onBlur={handleBlur}
                autoComplete='off'
                autoCorrect={false}
                inputMode='email'
                secureTextEntry={password}
                {...rest}
            />
        </View>
    )
}
