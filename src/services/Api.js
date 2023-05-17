import axios from 'axios';

axios.defaults.baseURL = 'https://6463aaee127ad0b8f88e3e2f.mockapi.io';

export const getContactsApi = () =>
  axios.get('/contacts').then(({ data }) => {
    return data;
  });
export const addContactApi = ({ name, phone }) =>
  axios.post('/contacts', { name, phone }).then(({ data }) => data);

export const deleteContactApi = id =>
  axios.delete(`/contacts/${id}`).then(({ data }) => {
    return data;
  });
