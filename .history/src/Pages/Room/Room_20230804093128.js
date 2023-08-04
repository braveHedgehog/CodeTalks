/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text} from 'react-native';
import style from './Room.style';
import RoomCard from '../../Component/RoomCard/RoomCard';

const Room = () => {
  return (
    <View>
      <Text>Hello Room</Text>
      <RoomCard />
    </View>
  );
};

export default Room;
