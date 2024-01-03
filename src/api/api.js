import axios from 'axios';

axios.defaults.baseURL = 'https://dummyjson.com';

export async function fetchUsers() {
  const { data } = await axios.get('/users');
  return data;
}

// MaximAliievLomach
