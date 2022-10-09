import { render, screen } from '@testing-library/react';
import Movie from './movie.component';
import { MemoryRouter as Router } from 'react-router-dom';

describe('<Movie />', () => {
  const props = {
    posterPath: 'posterPath.png',
    title: 'movie title',
    movieId: 12345,
  };
  it('should render <Movie /> props', () => {
    render(
      <Router>
        <Movie {...props} />
      </Router>,
    );
    const poster = screen.getByRole('img');
    expect(poster).toBeTruthy();
    const expectedPosterPath = `${process.env.REACT_APP_TMDB_POSTER_PREFIX}${props.posterPath}`;
    expect(poster.getAttribute('src')).toEqual(expectedPosterPath);
    const title = screen.getByTestId('movie-title');
    expect(title.innerText).toBeFalsy();
  });
});
