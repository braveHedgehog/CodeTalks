/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from './RoomMessages.styles';

import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import ParseContentData from '../../utils/parseContentData/ParseContentData';

import ContentInputModal from '../../components/modal/ContentInputModal';
import FloatingButton from '../../components/FloatingButton';
import RoomMessageCard from '../../components/Cards/RoomMessageCard';
import Header from '../../components/Header';

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
      <Header title={route.params.item.room} />
      <FlatList data={messages} renderItem={renderContent} />
      <FloatingButton handleFloatingSubmit={handleInputToogle} />
      <ContentInputModal
        placeholder="Message..."
        visible={modal}
        handleModalSubmit={handleSendContent}
        onClose={handleInputToogle}
      />
    </View>
  );
};

export default RoomMessages;
