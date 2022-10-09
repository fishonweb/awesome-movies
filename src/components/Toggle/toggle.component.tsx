import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';

interface IToggleTheme {
  onChange: (e: boolean) => void;
}

const ToggleLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 36px;
  height: 20px;
`;

const Slider = styled.span<{ checked: boolean }>`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 20px;
  background-color: lightgray;
  transition: 0.4s;
  &::before {
    font-family: 'Material Icons';
    color: gray;
    border-radius: 50%;
    position: absolute;
    content: '${(props) => (props.checked ? 'mode_night' : 'sunny')}';
    height: 18px;
    width: 18px;
    left: 1px;
    bottom: 1px;
    background-color: white;
    transition: 0.4s;
    transform: translateX(${(props) => (props.checked ? '16px' : '0')});
  }
`;

const ToggleInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

const ToggleTheme: React.FC<IToggleTheme> = ({ onChange }) => {
  const [checked, setChecked] = useState<boolean>(false);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.checked;
    setChecked(value);
    onChange(value);
  };

  return (
    <ToggleLabel>
      <ToggleInput data-testid="toggleinput" type="checkbox" name="toggle" onChange={(event) => handleChange(event)} />
      <Slider checked={checked}></Slider>
    </ToggleLabel>
  );
};

export default ToggleTheme;
