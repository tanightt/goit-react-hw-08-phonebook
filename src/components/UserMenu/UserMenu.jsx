import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logoutThunk } from 'redux/auth/authOperations';
import { selectUser } from 'redux/selectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/contacts">Contacts</NavLink>
        </li>
      </ul>
      <p>{user.email}</p>
      <button type="button" onClick={() => dispatch(logoutThunk())}>
        Logout
      </button>
    </div>
  );
};
