import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Header/header.component';
import device from '../utils/devices';

const RootContainer = styled.div`
  @media ${device.laptop} {
    max-width: 80vw;
    margin: 0 auto;
  }
`;

const Root: React.FC = () => {
  return (
    <>
      <Header />
      <RootContainer>
        <Outlet />
      </RootContainer>
    </>
  );
};

export default Root;
