import styled from 'styled-components';
import device from '../../utils/devices';

interface IMovieProps {
  posterPath: string;
  title: string;
}

const MovieWrapper = styled.div`
  margin: 1rem;
  width: auto;
  position: relative;

  @media ${device.laptop} {
    width: 200px;
  }

  h1 {
    display: none;
    opacity: 0;
    text-align: center;
    padding: 1rem;
  }
  img {
    transition: opacity 0.2s linear;
    display: block;
    width: 100%;
    height: 100%;
  }
  &:hover img {
    opacity: 0.5;
  }
  &:hover h1 {
    display: block;
    position: absolute;
    bottom: 0;
    opacity: 1;
  }
`;

const Movie: React.FC<IMovieProps> = ({ posterPath, title }) => {
  return (
    <>
      <MovieWrapper data-testid="movie-wrapper">
        <img src={`${process.env.REACT_APP_TMDB_POSTER_PREFIX}${posterPath}`} alt={title} />
        <h1 data-testid="movie-title">{title}</h1>
      </MovieWrapper>
    </>
  );
};

export default Movie;
