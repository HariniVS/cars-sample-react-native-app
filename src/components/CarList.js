import React, {useState, useEffect} from 'react';
import {ScrollView} from 'react-native';
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
        <ScrollView>
          <For each="car" of={cars}>
            <CarDetails key={car.brand} car={car} />
          </For>
        </ScrollView>
      </When>
    </Choose>
  );
};

export default CarList;
