import axios from 'axios';

const ROOT_URL = process.env.REACT_APP_ROOT_URL;
const RANDOM_URL = process.env.REACT_APP_RANDOM_URL;

export function getBreed(breed) {
  return axios({
    method: 'get',
    url: `${ROOT_URL}/${breed}/images/random`,
  });
}

export function getRandomBreed() {
  return axios({
    method: 'get',
    url: `https://dog.ceo/api/breeds/image/random`,
  });
}
