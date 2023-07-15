import { styled } from 'styled-components';

export const LoginForm = styled.form`
  width: 400px;
  padding: 20px;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  font-weight: 100;
  color: white;
  background-image: linear-gradient(
    rgba(44, 44, 45, 0.7),
    rgba(44, 44, 45, 0.7)
  );
  input {
    width: 300px;
    border: none;
    border-bottom: 1px solid #fff;
    background-color: #8c6e6e;
    outline: none;
  }
`;

export const LoginBtn = styled.button`
  height: 30px;
  width: 100px;
  margin-top: 30px;
  margin-left: 210px;
  border-radius: 5px;
  border-color: darkcyan;
  cursor: pointer;

  &:hover {
    background-color: darkcyan;
    color: white;
  }
`;
