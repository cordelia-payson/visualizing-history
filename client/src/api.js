/* eslint-disable no-underscore-dangle */
/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import queryString from 'query-string';

const victoriaAlbertImages = async (decade) => {
  const startYear = Number(decade);
  const endYear = Number(decade) + 9;
  return axios.get('https://api.vam.ac.uk/v2/objects/search', {
    params: {
      q_place_name: 'Britain',
      year_made_from: startYear,
      year_made_to: endYear,
      images_exist: 1,
      page_size: 100,
      order_by: 'fields_populated',
      kw_object_type: '-Drawing',
    },
  })
    .then((res) => res.data.records)
    .catch((err) => err);
};

const formatVA = (records) => {
  console.log(records);
  const formatted = [];
  records.forEach((record) => {
    const imageUrl = `${record._images._iiif_image_base_url}full/!700,400/0/default.jpg`;
    const newRecord = {
      image: imageUrl,
      date: record._primaryDate,
      artist: record._primaryMaker.name,
      title: record._primaryTitle,
    };
    formatted.push(newRecord);
  });
  return formatted;
};

export const getImages = async (decade) => {
  const records = await victoriaAlbertImages(decade);
  const formatted = await formatVA(records);
  return formatted;
};
