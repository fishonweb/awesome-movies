import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import moviesService from '../../services/movies.services';
import IMovie from '../../types/movie.interface';
import device from '../../utils/devices';

const MovieDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 1.5rem;

  @media ${device.laptop} {
    flex-direction: row;
  }
`;
const MovieDescription = styled.div`
  @media ${device.laptop} {
    margin-right: 2rem;
  }
`;

const MovieTitle = styled.h1`
  margin: 2rem 0;
`;

const MovieSynopsis = styled.div`
  margin-bottom: 2rem;
`;

const MoviePoster = styled.img`
  display: block;
  @media ${device.laptop} {
    margin-top: 2rem;
    max-width: 300px;
  }
`;
const MovieDetails: React.FC = () => {
  let { movieId } = useParams();

  const [movieDetails, setMovieDetails] = useState<IMovie>();

  const getMovieDetail: any = async (id: string) => {
    const { data } = await moviesService.getMovieById(id);
    setMovieDetails(data);
  };

  useEffect(() => {
    getMovieDetail(movieId);
  }, [movieId]);
  return (
    <>
      <MovieDetailsWrapper>
        <MovieDescription>
          <MovieTitle>{movieDetails?.title}</MovieTitle>
          <MovieSynopsis>{movieDetails?.overview}</MovieSynopsis>
        </MovieDescription>
        <MoviePoster src={`${process.env.REACT_APP_TMDB_POSTER_PREFIX}${movieDetails?.poster_path}`} alt="" />
      </MovieDetailsWrapper>
    </>
  );
};

export default MovieDetails;
