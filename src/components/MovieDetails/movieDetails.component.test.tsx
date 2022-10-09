import { render } from '@testing-library/react';
import moviesService from '../../services/movies.services';
import MovieDetails from './movieDetails.component';

describe('<MovieDetails />', () => {
  it('should render <SearchBar /> props', () => {
    const mockGetMovieById = jest.spyOn(moviesService, 'getMovieById');
    render(<MovieDetails />);
    expect(mockGetMovieById).toHaveBeenCalled();
  });
});
