import IPopularMovies from '../types/popularMovies.interface';
import httpCommon from '../utils/http-common';

const getPopular = () => {
  return httpCommon.get<IPopularMovies>(`/movie/popular?api_key=${process.env.REACT_APP_TMDB_TOKEN}`);
};

const moviesService = {
  getPopular,
};

export default moviesService;
