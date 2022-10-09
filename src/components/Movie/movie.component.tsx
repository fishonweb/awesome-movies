import { Link } from 'react-router-dom';
import styled from 'styled-components';
import device from '../../utils/devices';

interface IMovieProps {
  posterPath: string;
  title: string;
  movieId?: number;
}

const MovieWrapper = styled.div`
  margin: 1rem;
  width: auto;
  position: relative;

  @media ${device.laptop} {
    width: 200px;
  }
  img {
    transition: opacity 0.2s linear;
    display: block;
    width: 100%;
    height: 100%;
  }
  &:hover img {
    opacity: 0.3;
  }
  &:hover h1 {
    display: block;
    position: absolute;
    bottom: 0;
    opacity: 1;
    color: #000000;
  }
`;

const MovieTitle = styled.h1`
  display: none;
  opacity: 0;
  text-align: center;
  padding: 1rem;
  font-size: 2rem;
`;

const Movie: React.FC<IMovieProps> = ({ posterPath, title, movieId }) => {
  return (
    <>
      <Link to={`movies/${movieId}`}>
        <MovieWrapper data-testid="movie-wrapper">
          <img src={`${process.env.REACT_APP_TMDB_POSTER_PREFIX}${posterPath}`} alt={title} />
          <MovieTitle data-testid="movie-title">{title}</MovieTitle>
        </MovieWrapper>
      </Link>
    </>
  );
};

export default Movie;
