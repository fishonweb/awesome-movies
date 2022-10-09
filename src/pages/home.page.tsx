import { useState } from 'react';
import ResultMovies from '../components/ResultMovies/resultMovies.component';
import SearchBar from '../components/SearchBar/searchBar.component';

const Home: React.FC = () => {
  const [movieQuery, setMovieQuery] = useState<string>('');
  return (
    <>
      <SearchBar placeholder="Rechercher un film" getMovieQuery={(value) => setMovieQuery(value)} />
      <ResultMovies searchQuery={movieQuery} />
    </>
  );
};

export default Home;
