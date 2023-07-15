import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutThunk } from 'redux/auth/authOperations';
import { selectUser } from 'redux/selectors';
import { LogoutBtn } from './UserMenu.styled';
import { NavItem } from 'components/Layout/Layout.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  const handleBtn = () => {
    dispatch(logoutThunk());
    navigate('/');
  };
  return (
    <>
      <span>
        <NavItem to="/contacts">Contacts</NavItem>
      </span>
      <p>Hello {user.name}!</p>
      <LogoutBtn type="button" onClick={handleBtn}>
        Logout
        <img
          src="https://www.svgrepo.com/download/138126/logout-sketch.svg"
          alt="logout"
          width="30"
        />
      </LogoutBtn>
    </>
  );
};
