import { useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import { AuthNav, UserMenu } from 'components';
import { selectIsLoggedIn } from 'redux/selectors';

export const Layout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
        </nav>
        {!isLoggedIn ? <AuthNav /> : <UserMenu />}
      </header>
      <Outlet />
    </>
  );
};
