import styled from 'styled-components';

interface IIcon {
  children: string;
  size?: string;
  color?: string;
}

const IconWrapper = styled.span<{ size?: string; color?: string }>`
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: ${(props) => (props.size ? props.size : '24px')};
  display: inline-block;
  line-height: 1;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;

  /* Support for all WebKit browsers. */
  -webkit-font-smoothing: antialiased;
  /* Support for Safari and Chrome. */
  text-rendering: optimizeLegibility;

  /* Support for Firefox. */
  -moz-osx-font-smoothing: grayscale;

  /* Support for IE. */
  font-feature-settings: 'liga';
  color: ${(props) => (props.color ? props.color : '#000000')};
`;

const Icon: React.FC<IIcon> = ({ children, size, color }) => {
  return (
    <IconWrapper size={size} color={color}>
      {children}
    </IconWrapper>
  );
};

export default Icon;
