import axios from 'axios';

const api = '/api';

// To run locally, pass in the server url in  the env file. 

export const getCategoriesAPI = async () => {
  try {
    const res = await axios.get( api + '/menu/listCategories');
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getMenuItemsAPI = async () => {
  try {
    const res = await axios.get( api + '/menu');
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
