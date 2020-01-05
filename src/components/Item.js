import React from 'react';
import {View} from 'react-native';

const Item = props => {
  const {viewStyle} = styles;
  return <View style={viewStyle}>{props.children}</View>;
};

const styles = {
  viewStyle: {
    borderWidth: 1,
    borderColor: 'gainsboro',
    borderBottomWidth: 0,
    shadowColor: 'black',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.1,
    marginLeft: 5,
    marginTop: 5,
    marginRight: 5,
  },
};

export default Item;
