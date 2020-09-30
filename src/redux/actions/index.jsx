import { SEARCH_BREED, DELETE_BREED } from '../constants';
import axios from 'axios';

export const searchBreed = (name, image) => {
  const action = {
    type: SEARCH_BREED,
    name,
    image,
  };
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

        dispatch(searchBreed(name, image));
      })
      .catch((error) => {
        const errorMsg = error.message;
        console.log('errorMessage', errorMsg);
      });
  };
  return action;
};

const RANDOM_URL = process.env.REACT_APP_RANDOM_URL;
export const fetchRandomURLData = (breed) => {
  const action = (dispatch) => {
    axios
      .get(`https://dog.ceo/api/breeds/image/random`)
      .then((response) => {
        console.log('object', response);
        const name = breed;
        const image = response.data.message;

        dispatch(searchBreed(name, image));
      })
      .catch((error) => {
        const errorMsg = error.message;
        console.log('errorMessage', errorMsg);
      });
  };
  return action;
};
