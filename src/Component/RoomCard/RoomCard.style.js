/* eslint-disable prettier/prettier */
import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'white',
    height: Dimensions.get('window').height * 0.3,
    width: Dimensions.get('window').width * 0.45,
    backgroundColor: 'white',
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    color: '#ff9e42',
    textAlign: 'center',
  },
});
