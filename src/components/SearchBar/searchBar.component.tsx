import { ChangeEvent, FormEvent, useState } from 'react';
import styled from 'styled-components';
import Icon from '../Icon/icon.component';

interface ISearchBarProps {
  placeholder?: string;
  getMovieQuery: (e: string) => void;
}

const SearchBarWrapper = styled.div`
  margin-top: 1rem;
  width: 100%;
  position: relative;
`;

const Input = styled.input`
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

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
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
        <Input type="text" placeholder={placeholder || ''} value={query} name="movieQuery" onChange={(event) => handleChange(event)} />
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
