import Movie from './movie.interface';

export default interface IResultMovies {
  page: number;
  results: Movie[];
  total_results: number;
  total_pages: number;
}
