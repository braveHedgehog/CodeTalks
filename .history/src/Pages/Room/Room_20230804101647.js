/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';

import style from './Room.style';

import FloatingButton from '../../Component/FloatingButton/FloatingButton';
import ContentInputModal from '../../Component/Modal/ContentImputModal/ContentInputModal';
import RoomCard from '../../Component/RoomCard/RoomCard';

import database from '@react-native-firebase/database';
import ParseContentData from '../../utils/ParseContentData';

const Room = ({navigation}) => {
  const [inputModalVisible, setInputModalVisible] = React.useState(false);
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    database()
      .ref('rooms/')
      .on('value', snapshot => {
        const contentData = snapshot.val();
        const parsedData = ParseContentData(contentData || {});
        setRooms(parsedData);
      });
  }, []);
  function handleSendContent(content) {
    handleInputToggle();
    sendContent(content);
}

function sendContent(content) {
    const contentObject = {
        text: content,
        date: (new Date()).toISOString(),
        dislike: 0,
    };
    database().ref('room/').push(contentObject);
}

  const handleRooms = item => {
    navigation.navigate('RoomMessagesPage', {item});
  };
  function handleInputToggle() {
    setInputModalVisible(!inputModalVisible);
}

  const renderRooms = ({item}) => (
    <RoomCard text={item.room} onSend={() => handleRooms(item)} />
  );
  return (
    <View style={style.container}>
      <FlatList
        numColumns={2}
        data={rooms}
        renderItem={renderRooms}
        columnWrapperStyle={style.card}
      />

      <FloatingButton handleFloatingSubmit={handleInputToggle} />
      <ContentInputModal
        placeholder={'Room Name...'}
        handleModalSubmit={onSend}
        visible={inputModalVisible}
        onClose={handleInputToggle}
      />
    </View>
  );
};

export default Room;
