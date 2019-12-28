import axios from 'axios';

const getCarList = () => {
  return axios.get('https://givecars.herokuapp.com/');
};

export default getCarList;
