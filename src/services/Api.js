import axios from 'axios';

axios.defaults.baseURL = 'https://6463aaee127ad0b8f88e3e2f.mockapi.io';

export const getContactsApi = () => {
  axios.get('/contacts').then(({ data }) => data);
};
