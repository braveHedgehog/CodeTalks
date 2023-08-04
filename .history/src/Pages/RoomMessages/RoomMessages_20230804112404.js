/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from './RoomMessages.style';

import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import ParseContentData from '../../utils/ParseContentData';

import ContentInputModal from '../../Component/Modal/ContentImputModal/ContentInputModal';
import FloatingButton from '../../Component/FloatingButton/FloatingButton';
import RoomMessageCard from '../../Component/RoomMessageCard/RoomMessageCard';

const RoomMessages = ({route}) => {
  const [messages, setMessages] = useState([]);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    database()
      .ref(`/rooms/${route.params.item.id}/messages/`)
      .on('value', snapshot => {
        const contentData = snapshot.val();
        const parseData = ParseContentData(contentData || {});
        setMessages(parseData);
      });
  }, []);

  const handleInputToogle = () => {
    setModal(!modal);
  };

  const handleSendContent = content => {
    handleInputToogle();
    handleSubmit(content);
  };

  const handleSubmit = content => {
    const message = {
      username: auth().currentUser.email.split('@')[0],
      text: content,
      date: new Date().toISOString(),
    };
    try {
      database().ref(`/rooms/${route.params.item.id}/messages`).push(message);
    } catch (error) {
      console.log(error);
    }
  };
  const renderContent = ({item}) => <RoomMessageCard message={item} />;

  return (
    <View style={styles.container}>
      <FlatList data={messages} renderItem={renderContent} />
      <FloatingButton handleFloatingSubmit={handleInputToogle} />
      <ContentInputModal
        placeholder={'Messages...'}
        visible={modal}
        handleModalSubmit={handleSendContent}
        onClose={handleInputToogle}
      />
    </View>
  );
};

export default RoomMessages;
