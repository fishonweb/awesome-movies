import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Icon from '../Icon/icon.component';

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  background: var(--header);
  color: #ffffff;
  padding: 0.8rem;
  height: 50px;
`;

const Header: React.FC = () => {
  let location = useLocation();

  const [displayBackButton, setDisplayBackButton] = useState<boolean>(false);

  useEffect(() => {
    if (location.pathname !== '/') {
      setDisplayBackButton(true);
    } else {
      setDisplayBackButton(false);
    }
  }, [location]);

  return (
    <>
      <HeaderWrapper>
        <div>
          {displayBackButton && (
            <NavLink to="/" title="Back to homepage">
              <Icon color="#FFFFFF">arrow_back_ios</Icon>
            </NavLink>
          )}
        </div>
        <div>MOVIES</div>
        <div></div>
      </HeaderWrapper>
    </>
  );
};

export default Header;
