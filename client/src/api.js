/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import queryString from 'query-string';

const victoriaAlbertImages = async (decade) => {
  let images = [];
  // console.log('av request', decade);
  const startYear = Number(decade);
  const endYear = Number(decade) + 9;
  // if multiple pages send another request for second page?
  return axios.get('https://api.vam.ac.uk/v2/objects/search', {
    params: {
      q_place_name: 'Britain',
      year_made_from: startYear,
      year_made_to: endYear,
      images_exist: 1,
      page_size: 10,
    },
  })
    .then((res) => {
      console.log('response', res.data.records);
      images = (res.data.records);
    })
    .catch((err) => err);
};

export const getImages = async (decade) => {
  victoriaAlbertImages(decade);
};
// va data
// const vaInfo = {
//   objectType
// };

// const victoriaAlbertImages = (decade) => {
//   const images = [];
//   const startYear = Number(decade);
//   const endYear = Number(decade) + 9;
//   const params = {
//     q_place_name: 'Britain',
//     year_made_from: startYear,
//     year_made_to: endYear,
//     images_exist: 1,
//     page_size: 10,
//   };
//   const url = queryString.stringifyUrl({ url: 'https://api.vam.ac.uk/v2/objects/search', query: params });
//   fetch(url)
//     .then((response) => response.body.json)
//     .then((data) => {

//     })
// };