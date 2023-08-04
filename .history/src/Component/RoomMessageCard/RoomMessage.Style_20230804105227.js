/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    borderWidth: 1,
    //borderStyle:'dotted',
    borderRadius: 10,
    borderColor: 'white',
    backgroundColor: 'white',
    margin: 10,
    padding: 10,
  },
  inner_container: {
    flexDirection: 'row',
  },
  user: {
    flex: 1,
  },
  message: {
    marginTop: 10,
    fontWeight: 'bold',
  },
});
