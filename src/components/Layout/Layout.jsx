import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { NavLink, Outlet } from 'react-router-dom';
import { Loader } from '../Loader/Loader';
import styled from 'styled-components';
import { GlobalStyle } from '../GlobalStyle';
import { Header, Layout, NavList } from './Layout.styled';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

export const AppLayout = () => {
  return (
    <Layout>
      <Header>
        <nav>
          <NavList>
            <li>
              <StyledLink to="/" end>
                Home
              </StyledLink>
            </li>
            <li>
              <StyledLink to="/movies">Movies</StyledLink>
            </li>
          </NavList>
        </nav>
      </Header>

      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>

      <GlobalStyle />
      <Toaster />
    </Layout>
  );
};
