import React from 'react';
import {View} from 'react-native';
import Header from './Header';
import CarList from './CarList';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <Header title={'Cars'} />
      <CarList />
    </View>
  );
};

export default App;
