import { useDispatch } from 'react-redux';
import { registerThunk } from 'redux/auth/authOperations';

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
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <h3>Name</h3>
        <input type="text" name="name" required />
        <h3>Email</h3>
        <input type="email" name="email" required />
        <h3>Password</h3>
        <input type="password" name="password" required />
        <button type="submit">Register</button>
      </form>
    </>
  );
};
