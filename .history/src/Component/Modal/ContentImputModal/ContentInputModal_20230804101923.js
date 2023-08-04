/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, TextInput} from 'react-native';

import style from './ContentInputModal.style';

import Modal from 'react-native-modal';
import Button from '../../Button/Button';

const ContentInputModal = ({
  visible,
  handleModalSubmit,
  onClose,
}) => {
  const [text, setText] = useState('');

  const handleSubmit = () => {
    if (!text) {
      return;
    }
    handleModalSubmit(text);
  };

  return (
    <Modal
      style={style.modal}
      isVisible={visible}
      onSwipeComplete={onClose}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}>
      <View style={style.container}>
        <View style={style.input_container}>
          <TextInput
            placeholder="Room Name..."
            onChangeText={setText}
            multiline
          />
        </View>
        <Button text="Submit" onPress={handleSubmit} theme="primary" />
      </View>
    </Modal>
  );
};

export default ContentInputModal;
