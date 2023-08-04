/* eslint-disable prettier/prettier */
import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import style from './RoomCard.style';

const RoomCard = ({text, onSend}) => {
  return (
    <View style={style.container} >
      <TouchableOpacity  onPress={onSend}>
        <Text style={style.title}>{text.room}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RoomCard;
