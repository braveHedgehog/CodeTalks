/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import style from './SignUp.style';
import Input from '../../../Component/Input/Input';
import Button from '../../../Component/Button/Button';
import auth from '@react-native-firebase/auth';
import { showMessage } from "react-native-flash-message";
import {Formik} from 'formik';

const initialFromValues = {
  email: '',
  Password: '',
  repassword: '',
};

const SignUp = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  async function handleFormSubmit(formValues) {
    if (formValues.password !== formValues.repassword) {
      showMessage({
        message: 'Passwords is not match',
        type: 'warning',
      });
      return;
    }
    try {
      await auth().createUserWithEmailAndPassword(
        formValues.usermail,
        formValues.password,
      );
      showMessage({
        message: 'User is created',
        type: 'success',
      });
      navigation.navigate('LogIn');
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }
  function handleLogin() {
    navigation.goBack();
  }
  return (
    <SafeAreaView style={style.container}>
      <Text style={style.header}>codetalks</Text>
      <Formik initialValues={initialFromValues} onSubmit={handleFormSubmit}>
        {({values, handleChange, handleSubmit}) => (
          <>
            <Input
              value={values.email}
              onType={handleChange}
              placeholder="E-Mail"
            />
            <Input
              value={values.Password}
              onType={handleChange}
              placeholder="Password"
              isSecure={true}
            />
            <Input
              value={values.repassword}
              onType={handleChange}
              placeholder="Password Again"
              isSecure={true}
            />
            <Button
              text="Sign Up"
              theme="primary"
              loading={loading}
              onPress={handleSubmit}
            />
          </>
        )}
      </Formik>
      <Button
        text="Go Back"
        theme="secondary"
        loading={loading}
        onPress={handleLogin}
      />
    </SafeAreaView>
  );
};

export default SignUp;
