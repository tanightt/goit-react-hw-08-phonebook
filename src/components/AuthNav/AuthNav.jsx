import { Link } from 'react-router-dom';
import { AuthContainer } from './AuthNav.styled';
import { NavItem } from 'components/Layout/Layout.styled';

const routes = [
  { path: '/register', text: 'Register' },
  { path: '/login', text: 'Login' },
];

export const AuthNav = () => {
  return (
    <AuthContainer>
      {routes.map(route => (
        <li key={route.path}>
          <NavItem to={route.path}>{route.text}</NavItem>
        </li>
      ))}
    </AuthContainer>
  );
};
