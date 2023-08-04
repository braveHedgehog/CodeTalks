/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LogIn from './Pages/auth/Login/Login';
import SignUp from './Pages/auth/SignUp';
import FlashMessage from 'react-native-flash-message';
import auth from '@react-native-firebase/auth';
import Room from './Pages/Room/Room';
import RoomMessages from './Pages/RoomMessages/RoomMessages';
import {TouchableOpacity, Text} from 'react-native';

const Stack = createNativeStackNavigator();
const LogStack = () => {
  return (
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
  );
};

const RoomStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Room"
        component={Room}
        options={{
          headerTitle: 'Rooms',
          headerTitleAlign: 'center',
          headerTintColor: '#ff9e42',
          headerBackVisible: false,
        }}
      />
      <Stack.Screen
        name="RoomMessages"
        component={RoomMessages}
        options={({route, navigation}) => ({
          headerTitle: route.params.item.room,
          headerTitleAlign: 'center',
          headerTintColor: '',
          headerBackTitle: 'Rooms',
          headerRight: () => (
            <TouchableOpacity onPress={() => auth().signOut()}>
              <Text>Log Out</Text>
            </TouchableOpacity>
          ),
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text>Rooms</Text>
            </TouchableOpacity>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

function App() {
  const [userSession, setUserSession] = React.useState();

  React.useEffect(() => {
    auth().onAuthStateChanged(user => {
      setUserSession(!!user);
    });
  }, []);
  console.log(auth().currentUser);
  return (
    <NavigationContainer>
      {!userSession ? <LogStack /> : <RoomStack />}

      <FlashMessage position="top" />
    </NavigationContainer>
  );
}

export default App;
