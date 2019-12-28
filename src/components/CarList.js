import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import getCarList from '../service/CarService';
import CarDetails from './CarDetails';

const CarList = () => {
  const [cars, setCarDetails] = useState([]);

  useEffect(() => {
    getCarList().then(response => {
      setCarDetails(response.data);
    });
  }, [setCarDetails]);

  return (
    <Choose>
      <When condition={cars}>
        <View>
          <For each="car" of={cars}>
            <CarDetails key={car.brand} brand={car.brand} />
          </For>
        </View>
      </When>
    </Choose>
  );
};

export default CarList;
