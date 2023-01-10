/* eslint-disable import/prefer-default-export */
import axios from 'axios';

const victoriaAlbertImages = async (decade) => {
  const images = [];
  console.log('av request', decade);
  const startYear = Number(decade);
  const endYear = Number(decade) + 9;
  // if multiple pages send another request for second page?
  const response = await axios.get('https://api.vam.ac.uk/v2/objects/search', {
    params: {
      q_place_name: 'Britain',
      year_made_from: startYear,
      year_made_to: endYear,
      images_exist: 1,
      page_size: 10,
    },
    responseType: 'stream',
  })

    .then((res) => {
      // console.log('response', res.data.records);
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
