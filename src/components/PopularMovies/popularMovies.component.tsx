import { useEffect, useState } from 'react';
import styled from 'styled-components';
import moviesService from '../../services/movies.services';
import IPopularMovies from '../../types/popularMovies.interface';
import Movie from '../Movie/movie.component';

const PopularMoviesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const PopularMovies: React.FC = () => {
  const [popularMovies, setPopularMovies] = useState<IPopularMovies>();

  const getPopularMovies = async () => {
    const { data } = await moviesService.getPopular();
    setPopularMovies(data);
  };
  useEffect(() => {
    getPopularMovies();
  }, []);
  return (
    <PopularMoviesWrapper>
      {popularMovies?.results.map((movie) => (
        <Movie posterPath={movie.poster_path} title={movie.title} key={movie.id} />
      ))}
    </PopularMoviesWrapper>
  );
};

export default PopularMovies;
