import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/auth/authOperations';
import { LoginBtn, LoginForm } from './Login.styled';

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
      <LoginForm onSubmit={handleSubmit}>
        <h1>Login</h1>
        <p>Email</p>
        <input type="email" name="email" required />
        <p>Password</p>
        <input type="password" name="password" required />
        <LoginBtn type="submit">Login</LoginBtn>
      </LoginForm>
    </>
  );
};
