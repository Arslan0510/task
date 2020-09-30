import { ADD_BREED, DELETE_BREED } from '../constants';
import { bake_cookie, read_cookie } from 'sfcookies';

const breed = (action) => {
  return {
    name: action.name,
    image: action.image,
  };
};

const removeByName = (state = [], name) => {
  const breeds = state.filter((breed) => breed.name !== name);
  return breeds;
};

const breedData = (state = [], action) => {
  let breedData = null;
  state = read_cookie('breedData');
  switch (action.type) {
    case ADD_BREED:
      let index = state.findIndex((el) => el.name === action.name);
      if (index === -1) {
        breedData = [...state, breed(action)];
        bake_cookie('breedData', breedData);
      }
      return state;
    case DELETE_BREED:
      breedData = removeByName(state, action.name);
      bake_cookie('breedData', breedData);
      return breedData;
    default:
      return state;
  }
};

export default breedData;
