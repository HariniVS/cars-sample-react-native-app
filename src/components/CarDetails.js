import React from 'react';
import Item from './Item';
import {View, Text, Image, Linking} from 'react-native';
import ItemSection from './ItemSection';
import Button from './Button';

const CarDetails = ({car}) => {
  const {headerContainer, headerText, imageStyle} = styles;

  const buttonPressAction = () => {
    return () => {
      Linking.openURL(car.model[0].url);
    };
  };

  return (
    <Item>
      <ItemSection>
        <View style={headerContainer}>
          <Text style={headerText}>{car.brand}</Text>
          <Text style={headerText}>{car.model[0].name}</Text>
        </View>
      </ItemSection>
      <ItemSection>
        <Image style={imageStyle} source={{uri: car.model[0].image}} />
      </ItemSection>
      <ItemSection>
        <Button buttonPress={buttonPressAction()} />
      </ItemSection>
    </Item>
  );
};

const styles = {
  headerContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 18,
    fontWeight: '500',
    textTransform: 'uppercase',
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: 0,
  },
};
export default CarDetails;
