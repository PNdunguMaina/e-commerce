import axios from 'axios';

export default axios.create({
  baseURL: 'https://counties-kenya.herokuapp.com/api/v1',
  headers: {
    'Content-type': 'application/json',
  },
});
