import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LogIn from './Pages/auth/Login/Login';
import SignUp from './Pages/auth/SignUp';
import FlashMessage from 'react-native-flash-message';
import auth from '@react-native-firebase/auth';
import Room from './Pages/Room/Room';

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
          headerShown: true,
          headerStyle: {backgroundColor: 'white'},
          headerTintStyle: {color: 'white'},
          headerTintColor: '#F57C0A',
        }}
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
