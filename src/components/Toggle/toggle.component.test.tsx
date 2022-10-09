import { fireEvent, render, screen } from '@testing-library/react';
import ToggleTheme from './toggle.component';

describe('<ToggleTheme />', () => {
  const mockOnChange = jest.fn();
  const props = {
    onChange: mockOnChange,
  };
  it('should render <SearchBar /> props', () => {
    render(<ToggleTheme {...props} />);
    const input = screen.getByTestId('toggleinput');
    expect(input).not.toBeChecked();
  });
  it('should be checked/unchecked', () => {
    render(<ToggleTheme {...props} />);
    const input = screen.getByTestId('toggleinput');
    fireEvent.click(input);
    expect(input).toBeChecked();
    expect(mockOnChange).toHaveBeenCalledWith(true);
    fireEvent.click(input);
    expect(input).not.toBeChecked();
    expect(mockOnChange).toHaveBeenCalledWith(false);
  });
});
