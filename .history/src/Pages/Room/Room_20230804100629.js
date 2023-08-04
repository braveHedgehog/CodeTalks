/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';

import style from './Room.style';

//import FloatingButton from '../../Component/FloatingButton/FloatingButton';
import ContentInputModal from '../../Component/Modal/ContentImputModal/ContentInputModal';
import RoomCard from '../../Component/RoomCard/RoomCard';

import database from '@react-native-firebase/database';
import ParseContentData from '../../utils/ParseContentData';

const Room = ({navigation}) => {
  const [modal, setModal] = useState(false);
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

  const handleModal = () => {
    setModal(!modal);
  };

  const onSend = modelText => {
    handleModal();
    const room = {
      room: modelText,
      date: new Date().toISOString(),
      messages: '',
    };
    database().ref('/rooms').push(room);
  };

  const handleRooms = item => {
    navigation.navigate('RoomMessagesPage', {item});
  };

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
      <ContentInputModal
        placeholder={'Room Name...'}
        handleModalSubmit={onSend}
        visible={modal}
        onClose={handleModal}
      />
    </View>
  );
};

export default Room;
