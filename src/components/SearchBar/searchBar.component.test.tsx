import { fireEvent, render, screen } from '@testing-library/react';
import SearchBar from './searchBar.component';

describe('<SearchBar />', () => {
  const mockGetMovieQuery = jest.fn();
  const props = {
    getMovieQuery: mockGetMovieQuery,
    placeholder: 'search movie',
  };
  it('should render <SearchBar /> props', () => {
    render(<SearchBar {...props} />);
    const input = screen.getByTestId('searchinput');
    expect(input.getAttribute('placeholder')).toEqual(props.placeholder);
    fireEvent.change(input, { target: { value: 'Marvel' } });
    expect(input).toHaveValue('Marvel');
    fireEvent.submit(input);
    expect(mockGetMovieQuery).toHaveBeenCalled();
    expect(mockGetMovieQuery).toHaveBeenCalledWith('Marvel');
  });
});
