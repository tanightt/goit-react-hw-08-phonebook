import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/auth/authOperations';

export const Login = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    const user = {
      [email.name]: email.value,
      [password.name]: password.value,
    };
    dispatch(loginThunk(user));
    e.target.reset();
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <h3>Email</h3>
        <input type="email" name="email" required />
        <h3>Password</h3>
        <input type="password" name="password" required />
        <button type="submit">Login</button>
      </form>
    </>
  );
};
