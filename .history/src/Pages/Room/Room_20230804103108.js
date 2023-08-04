/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {SafeAreaView, FlatList} from 'react-native';

import style from './Room.style';

import FloatingButton from '../../Component/FloatingButton/FloatingButton';
import ContentInputModal from '../../Component/Modal/ContentImputModal/ContentInputModal';
import RoomCard from '../../Component/RoomCard/RoomCard';

import database from '@react-native-firebase/database';
import ParseContentData from '../../utils/ParseContentData';

const Room = ({navigation}) => {
  const [inputModalVisible, setInputModalVisible] = React.useState(false);
  const [contentList, setContentList] = React.useState([]);

  React.useEffect(() => {
    database()
      .ref('rooms/')
      .on('value', snapshot => {
        const contentData = snapshot.val();
        const parsedData = ParseContentData(contentData || {});
        setContentList(parsedData);
      });
  }, []);

  function handleInputToggle() {
    setInputModalVisible(!inputModalVisible);
  }

  function handleSendContent(content) {
    handleInputToggle();
    sendContent(content);
  }

  function sendContent(content) {
    const contentObject = {
      room: content,
      messages: '',
    };
    database().ref('rooms/').push(contentObject);
  }
  const handleRooms = item => {
    navigation.navigate('RoomMessagesPage', {item});
  };

  const renderContent = ({item}) => (
    <RoomCard text={item} onSend={handleRooms} />
  );
  console.log(contentList);
  return (
    <SafeAreaView style={style.container}>
      <FlatList data={contentList} renderItem={renderContent} />
      <FloatingButton handleFloatingSubmit={handleInputToggle} />
      <ContentInputModal
        visible={inputModalVisible}
        onClose={handleInputToggle}
        onSend={handleSendContent}
      />
    </SafeAreaView>
  );
};

export default Room;
