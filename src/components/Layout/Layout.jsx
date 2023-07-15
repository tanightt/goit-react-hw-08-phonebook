import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { AuthNav, UserMenu } from 'components';
import { selectIsLoggedIn } from 'redux/selectors';
import { LayoutContainer, NavItem } from './Layout.styled';

export const Layout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <LayoutContainer>
        <nav>
          <NavItem to="/">Home</NavItem>
        </nav>
        {!isLoggedIn ? <AuthNav /> : <UserMenu />}
      </LayoutContainer>
      <Outlet />
    </>
  );
};
