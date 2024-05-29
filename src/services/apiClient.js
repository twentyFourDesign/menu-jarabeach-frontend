// original code
import axios from 'axios';

const getUrl = relativeUrl => `${import.meta.env.VITE_BACKEND_BASE_URL}${relativeUrl}`;


export const performGetRequest = (url, params = {}) => axios.get(getUrl(url), { params });

export const performPostRequest = (url, payload = {}, params = {}) => axios.post(getUrl(url), payload, { params });

export const performPutRequest = (url, payload = {}, params = {}) => axios.put(getUrl(url), payload, { params });

export const performPatchRequest = (url, payload = {}, params = {}) => axios.patch(getUrl(url), payload, { params });

export const performDeleteRequest = (url, payload = {}, params = {}) =>
  axios.delete(getUrl(url), { params: params, payload });


// teejay code
// import axios from 'axios';

// const getUrl = relativeUrl => {
//   const baseUrl = import.meta.env.VITE_BACKEND_BASE_URL;
//   const fullUrl = `${baseUrl.replace(/\/+$/, '')}/${relativeUrl.replace(/^\/+/, '')}`;
//   console.log('Full URL:', fullUrl);  // Debug log
//   return fullUrl;
// };

// export const performGetRequest = (url, params = {}) => {
//   console.log('Performing GET request to:', getUrl(url), 'with params:', params);  // Debug log
//   return axios.get(getUrl(url), { params });
// };

// export const performPostRequest = (url, payload = {}, params = {}) => {
//   console.log('Performing POST request to:', getUrl(url), 'with payload:', payload, 'and params:', params);  // Debug log
//   return axios.post(getUrl(url), payload, { params });
// };

// export const performPutRequest = (url, payload = {}, params = {}) => {
//   console.log('Performing PUT request to:', getUrl(url), 'with payload:', payload, 'and params:', params);  // Debug log
//   return axios.put(getUrl(url), payload, { params });
// };

// export const performPatchRequest = (url, payload = {}, params = {}) => {
//   console.log('Performing PATCH request to:', getUrl(url), 'with payload:', payload, 'and params:', params);  // Debug log
//   return axios.patch(getUrl(url), payload, { params });
// };

// export const performDeleteRequest = (url, payload = {}, params = {}) => {
//   console.log('Performing DELETE request to:', getUrl(url), 'with payload:', payload, 'and params:', params);  // Debug log
//   return axios.delete(getUrl(url), { params });
// };
