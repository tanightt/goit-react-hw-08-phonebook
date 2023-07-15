import { useDispatch } from 'react-redux';
import { registerThunk } from 'redux/auth/authOperations';
import { RegisterBtn, RegisterForm } from './Register.styled';

export const Register = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const { name, email, password } = e.target.elements;
    const user = {
      [name.name]: name.value,
      [email.name]: email.value,
      [password.name]: password.value,
    };
    dispatch(registerThunk(user));
    e.target.reset();
  };
  return (
    <>
      <RegisterForm onSubmit={handleSubmit}>
        <h1>Create account</h1>
        <p>Name</p>
        <input type="text" name="name" required />
        <p>Email</p>
        <input type="email" name="email" required />
        <p>Password</p>
        <input type="password" name="password" required />
        <RegisterBtn type="submit">Register</RegisterBtn>
      </RegisterForm>
    </>
  );
};
