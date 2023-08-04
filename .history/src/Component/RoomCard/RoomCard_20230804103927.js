/* eslint-disable prettier/prettier */
import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import style from './RoomCard.style';

const RoomCard = ({text, onSend}) => {
  return (
    <TouchableOpacity style={style.container} onPress={onSend}>
    <Text style={style.text}>{text.room}</Text>
</TouchableOpacity>
  );
};

export default RoomCard;
