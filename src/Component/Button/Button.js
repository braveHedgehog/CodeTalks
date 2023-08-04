/* eslint-disable prettier/prettier */
import React from 'react';
import {TouchableOpacity, View, Text, ActivityIndicator} from 'react-native';
import style from './Button.style';

const Button = ({onPress, loading, theme, text}) => {
  return (
      <TouchableOpacity onPress={onPress} disabled={loading} style={style[theme].container} >
        {loading ? (
          <ActivityIndicator color={'black'} />
        ) : (
          <View style={style[theme].button_container}>
            <Text style={style[theme].title}>{text}</Text>
          </View>
        )}
      </TouchableOpacity>
  );
};

export default Button;
