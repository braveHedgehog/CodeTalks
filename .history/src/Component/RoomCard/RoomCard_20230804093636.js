/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text} from 'react-native';
import style from './RoomCard.style';

const RoomCard = ({room}) => {
  return (
    <View style={style.container} >
      <Text style={style.title}>{room.name}</Text>
    </View>
  );
};

export default RoomCard;
