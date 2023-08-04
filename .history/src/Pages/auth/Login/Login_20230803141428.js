/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import style from './Login.style';
import Input from '../../../Component/Input/Input';
import Button from '../../../Component/Button/Button';
import {Formik} from 'formik';

const initialFromValues = {
  email: '',
  password: '',
};

const LogIn = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  function handleFormSubmit() {}
  
  function handleSignUp() {
    navigation.navigate('SignUp');
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
    </SafeAreaView>
  );
};

export default LogIn;
