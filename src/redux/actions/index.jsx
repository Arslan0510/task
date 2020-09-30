import { ADD_BREED, DELETE_BREED } from '../constants';
import axios from 'axios';

export const addBreed = (name, image) => {
  const action = {
    type: ADD_BREED,
    name,
    image,
  };
  console.log('acion in seachWeather', action);
  return action;
};

export const deleteBreed = (name) => {
  const action = {
    type: DELETE_BREED,
    name,
  };
  return action;
};

const ROOT_URL = process.env.REACT_APP_ROOT_URL;
export const fetchURLData = (breed) => {
  const action = (dispatch) => {
    axios
      .get(`${ROOT_URL}/${breed}/images/random`)
      .then((response) => {
        const name = breed;
        const image = response.data.message;

        dispatch(addBreed(name, image));
      })
      .catch((error) => {
        const errorMsg = error.message;
        console.log('errorMessage', errorMsg);
      });
  };
  return action;
};

export const fetchRandomURLData = () => {
  const action = (dispatch) => {
    axios
      .get(`https://dog.ceo/api/breeds/image/random`)
      .then((response) => {
        const name = 'Random Breed';
        const image = response.data.message;

        dispatch(addBreed(name, image));
      })
      .catch((error) => {
        const errorMsg = error.message;
        console.log('errorMessage', errorMsg);
      });
  };
  return action;
};
