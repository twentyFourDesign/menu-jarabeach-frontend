import axios from 'axios';

const api = 'http://localhost:8081/api';

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
