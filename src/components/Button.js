import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const Button = ({buttonPress}) => {
  return (
    <TouchableOpacity style={styles.buttonStyle} onPress={buttonPress}>
      <Text style={styles.textStyle}>Click Me</Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    fontSize: 14,
    fontWeight: '500',
    paddingTop: 6,
    paddingBottom: 6,
    color: 'white',
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: 'grey',
    borderWidth: 1,
    marginLeft: 7,
    marginRight: 7,
  },
};
export default Button;
