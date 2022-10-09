import { useEffect, useState } from 'react';
import styled from 'styled-components';
import moviesService from '../../services/movies.services';
import IResultMovies from '../../types/resultMovies.interface';
import Movie from '../Movie/movie.component';

interface IResultMoviesProps {
  results?: any;
  searchQuery?: string;
}

const ResultMoviesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const NoResult = styled.div`
  font-size: 20px;
  margin: 5rem;
  text-align: center;
`;

const NoResultP = styled.p`
  margin: 1rem 0;
`;

const ResultMovies: React.FC<IResultMoviesProps> = ({ searchQuery }) => {
  const [resultMovies, setResultMovies] = useState<IResultMovies>();

  const getPopularMovies = async () => {
    const { data } = await moviesService.getPopular();
    setResultMovies(data);
  };

  const getMoviesByQuery = async (query: string) => {
    const { data } = await moviesService.getMoviesByQuery(query);
    setResultMovies(data);
  };

  useEffect(() => {
    if (!searchQuery) {
      getPopularMovies();
    } else {
      getMoviesByQuery(searchQuery.toLowerCase());
    }
  }, [searchQuery]);

  return (
    <ResultMoviesWrapper>
      {resultMovies?.results.map((movie) => (
        <Movie posterPath={movie.poster_path} title={movie.title} key={movie.id} movieId={movie.id} />
      ))}
      {resultMovies?.results.length === 0 && (
        <NoResult>
          <NoResultP>
            Aucun film correspondant à la recherche <strong>{searchQuery}</strong>
          </NoResultP>
          <img src="https://i.giphy.com/media/DKtGulWduyMa1KIFll/giphy.webp" alt="aucun résultat" />
        </NoResult>
      )}
    </ResultMoviesWrapper>
  );
};

export default ResultMovies;
