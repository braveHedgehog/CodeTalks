/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text} from 'react-native';
import styles from './RoomMessage.Style';
import {formatDistance, parseISO} from 'date-fns';
const RoomCard = ({message}) => {
  const formatedDate = formatDistance(parseISO(message.date), new Date(), {
    addSuffix: true,
  });
  return (
    <View style={styles.container}>
      <View style={styles.inner_container}>
        <Text style={styles.user}>{message.username}</Text>
        <Text style={styles.date}>{formatedDate}</Text>
      </View>
      <Text style={styles.message}>{message.text}</Text>
    </View>
  );
};

export default RoomCard;
