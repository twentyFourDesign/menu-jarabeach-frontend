export const apiEndpoints = {
  ITEMS_LISTING_FILTERED: '/api/v1/items/filtered',
  ITEMS_LISTING_UNFILTERED: '/api/v1/items',
  CATEGORIES_LISTING: 'http://64.23.195.110:8081/api/menu/listCategories',
  CREATE_CATEGORY: '/api/v1/category',
  CREATE_ITEM: '/api/v1/items',
  DELETE_CATEGORY: id => `/api/v1/category/${id}`,
  DELETE_ITEM: id => `/api/v1/items/${id}`,
  EDIT_CATEGORY: id => `/api/v1/category/${id}`,
  EDIT_ITEM: id => `/api/v1/items/${id}`,
};