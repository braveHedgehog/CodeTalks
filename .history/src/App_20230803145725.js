import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LogIn from './Pages/auth/Login/Login';
import SignUp from './Pages/auth/SignUp';
import FlashMessage from 'react-native-flash-message';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LogIn"
          component={LogIn}
          options={{
            headerStyle: {backgroundColor: 'darkorange'},
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            headerShown: false,
            headerStyle: {backgroundColor: 'darkorange'},
            headerTintStyle: {color: 'white'},
            headerTintColor: 'black',
          }}
        />
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  );
}

export default App;
