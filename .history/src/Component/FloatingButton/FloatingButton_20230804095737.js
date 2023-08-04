/* eslint-disable prettier/prettier */
import React from 'react';
import {TouchableOpacity} from 'react-native';
import style from './FloatingButton.style';
import Icon from 'react-native-vector-icons';

const FloatingButton = ({handleFloatingSubmit}) => {

  return (
    <TouchableOpacity style={style.container} onPress={handleFloatingSubmit}>
    <Icon name="plus" size={25} color="white" />
 </TouchableOpacity>
  );
};

export default FloatingButton;
