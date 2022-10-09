import { render } from '@testing-library/react';
import moviesService from '../../services/movies.services';
import ResultMovies from './resultMovies.component';
jest.mock('axios');

describe('<ResultMovies />', () => {
  it('should render ResultMovie with popular movie call by default', () => {
    const mockGetPopular = jest.spyOn(moviesService, 'getPopular');
    const mockGetMoviesByQuery = jest.spyOn(moviesService, 'getMoviesByQuery');
    render(<ResultMovies />);
    expect(mockGetPopular).toHaveBeenCalled();
    expect(mockGetMoviesByQuery).not.toHaveBeenCalled();
  });

  it('should render ResultMovie with query result', () => {
    const mockGetPopular = jest.spyOn(moviesService, 'getPopular');
    const mockGetMoviesByQuery = jest.spyOn(moviesService, 'getMoviesByQuery');
    render(<ResultMovies searchQuery="marvel" />);
    expect(mockGetPopular).not.toHaveBeenCalled();
    expect(mockGetMoviesByQuery).toHaveBeenCalledWith('marvel');
    render(<ResultMovies searchQuery="Star WArs" />);
    expect(mockGetPopular).not.toHaveBeenCalled();
    expect(mockGetMoviesByQuery).toHaveBeenCalledWith('star wars');
  });
});
