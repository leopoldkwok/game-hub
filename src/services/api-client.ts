import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '2f9e85b4d9df4c71919aaaf9992b7eb1',
  },
});
