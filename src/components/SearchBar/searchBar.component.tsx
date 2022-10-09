import { ChangeEvent, FormEvent, useState } from 'react';
import styled from 'styled-components';
import Icon from '../Icon/icon.component';
import debounce from 'lodash/debounce';

interface ISearchBarProps {
  placeholder?: string;
  getMovieQuery: (e: string) => void;
}

const SearchBarWrapper = styled.div`
  width: 90%;
  margin: 1rem auto 0 auto;
  position: relative;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  padding: 0.5rem;
`;

const Reset = styled.div`
  position: absolute;
  right: 8px;
  bottom: -4px;
  padding: 6px;
  cursor: pointer;
`;

const SearchBar: React.FC<ISearchBarProps> = ({ placeholder, getMovieQuery }) => {
  const [query, setQuery] = useState('');

  const debouncedQuery = debounce(() => {
    getMovieQuery(query);
  }, 700);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    debouncedQuery();
  };

  const handleReset = () => {
    setQuery('');
    getMovieQuery('');
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    getMovieQuery(query);
  };

  return (
    <SearchBarWrapper>
      <form onSubmit={(event) => handleSubmit(event)}>
        <Input
          data-testid="searchinput"
          type="text"
          placeholder={placeholder || ''}
          value={query}
          name="movieQuery"
          onChange={(event) => handleChange(event)}
        />
        {query && (
          <Reset onClick={handleReset}>
            <Icon>close</Icon>
          </Reset>
        )}
      </form>
    </SearchBarWrapper>
  );
};

export default SearchBar;
