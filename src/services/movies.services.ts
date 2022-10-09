import IResultMovies from '../types/resultMovies.interface';
import httpCommon from '../utils/http-common';

const getPopular = () => {
  return httpCommon.get<IResultMovies>(`/movie/popular?api_key=${process.env.REACT_APP_TMDB_TOKEN}`);
};

const getMoviesByQuery = (searchQuery: string) => {
  return httpCommon.get<IResultMovies>(`search/movie?api_key=${process.env.REACT_APP_TMDB_TOKEN}&query=${searchQuery}`);
};

const getMovieById = (movieId: string) => {
  return httpCommon.get<any>(`movie/${movieId}?api_key=${process.env.REACT_APP_TMDB_TOKEN}`);
};

const moviesService = {
  getPopular,
  getMoviesByQuery,
  getMovieById,
};

export default moviesService;
