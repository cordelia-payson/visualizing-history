/* eslint-disable no-underscore-dangle */
/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import queryString from 'query-string';

const victoriaAlbertImages = async (decade, country) => {
  let resultsNum;
  const startYear = Number(decade);
  const endYear = Number(decade) + 9;
  return axios.get('https://api.vam.ac.uk/v2/objects/search', {
    params: {
      q_place_name: country,
      year_made_from: startYear,
      year_made_to: endYear,
      images_exist: 1,
      page_size: 100,
      order_by: 'fields_populated',
      kw_object_type: '-Drawing',
    },
  })
    .then((res) => {
      // if (res.data.records.info.record_count > 100) {
      //   resultsNum = res.data.records.info.record_count;
      // }
      return res.data.records;
    })
    .catch((err) => err);
};

const formatVA = (records) => {
  const formatted = [];
  records.forEach((record) => {
    const imageUrl = `${record._images._iiif_image_base_url}full/full/0/default.jpg`;
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

export const getImages = async (decade, country) => {
  const records = await victoriaAlbertImages(decade, country);
  const formatted = await formatVA(records);
  return formatted;
};
