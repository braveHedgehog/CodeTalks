/* eslint-disable prettier/prettier */
import React from 'react';
import {View, TextInput} from 'react-native';
import style from './Input.style';

const Input = ({value, onType, placeholder, isSecure}) => {
  return (
    <View style={style.container}>
      <TextInput
        style={style.Input}
        value={value}
        onChangeText={onType}
        placeholder={placeholder}
        secureTextEntry={isSecure}
        autoCapitalize="none"
        placeholderTextColor={'white'}
      />
    </View>
  );
};

export default Input;
