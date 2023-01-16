/* eslint-disable no-underscore-dangle */
/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import queryString from 'query-string';

const victoriaAlbertImages = async (decade, country, page) => {
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
      page,
    },
  })
    .then((res) =>
      // if (res.data.records.info.record_count > 100) {
      //   resultsNum = res.data.records.info.record_count;
      // }
      res.data.records)
    .catch((err) => err);
};

const formatVA = (records) => {
  const formatted = [];
  records.forEach((record) => {
    const newRecord = {
      image: `${record._images._iiif_image_base_url}full/full/0/default.jpg`,
      date: record._primaryDate,
      artist: record._primaryMaker.name,
      title: record._primaryTitle,
      objectType: record.objectType,
      onDisplay: record._currentLocation.onDisplay,
      museumPage: `https://collections.vam.ac.uk/item/${record.systemNumber}`,
      museum: 'Victoria and Albert Museum',
    };
    formatted.push(newRecord);
  });
  return formatted;
};

export const getImages = async (decade, country) => {
  const records = await victoriaAlbertImages(decade, country);
  const formatted = await formatVA(records);
  console.log(formatted);
  return formatted;
};
