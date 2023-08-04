/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {SafeAreaView, Text, ScrollView} from 'react-native';
import style from './Login.style';
import Input from '../../../Component/Input/Input';
import Button from '../../../Component/Button/Button';
import {Formik} from 'formik';
import {showMessage} from 'react-native-flash-message';
import authErrorMessageParser from '../../../utils/authErrorMessageParser';
import auth from '@react-native-firebase/auth';

const initialFromValues = {
  email: '',
  password: '',
};

const LogIn = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  async function handleFormSubmit(formValues) {
    try {
      setLoading(true);
      await auth().signInWithEmailAndPassword(
        formValues.email,
        formValues.password,
      );
      showMessage({
        message: 'Congrats!!',
        type: 'success',
      });
      navigation.navigate('Home');
      setLoading(false);
    } catch (error) {
      console.log(error.code);
      showMessage({
        message: authErrorMessageParser(error.code),
        type: 'info',
      });
        setLoading(false);
    }
  }
  function handleSignUp() {
    navigation.navigate('SignUp');
  }
  return (
    <ScrollView style={style.container}>
      <Text style={style.header}>codetalks</Text>
      <Formik initialValues={initialFromValues} onSubmit={handleFormSubmit}>
        {({values, handleChange, handleSubmit}) => (
          <>
            <Input
              value={values.email}
              onType={handleChange}
              placeholder="E-Mail"
              isSecure={false}
            />
            <Input
              value={values.password}
              onType={handleChange}
              placeholder="Password"
              isSecure={true}
            />
            <Button
              text="Log in"
              theme="primary"
              loading={loading}
              onPress={handleSubmit}
            />
          </>
        )}
      </Formik>
      <Button
        text="Sign Up"
        theme="secondary"
        loading={loading}
        onPress={handleSignUp}
      />
    </ScrollView>
  );
};

export default LogIn;
