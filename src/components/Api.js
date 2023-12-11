import axios from 'axios';
const API_KEY = '2059bc5490f21765be4f3ae242d4cf1d';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const getPopularMoviengAll = async () => {
  const { data } = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  return data;
};
