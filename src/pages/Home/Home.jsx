import { styled } from 'styled-components';

export const Home = () => {
  return (
    <HomePage>
      <h1>Welcome to phonebook!</h1>
      <p>
        Welcome to our enchanting telephone directory website, where the power
        of communication lies at your fingertips. May your journey be filled
        with fascinating encounters, fruitful conversations, and a multitude of
        lasting connections. Enjoy your stay and may your phonebook always be
        brimming with meaningful connections!
      </p>
    </HomePage>
  );
};

const HomePage = styled.div`
  width: 700px;
  margin: auto;
  margin-top: 250px;
  text-align: center;
  color: white;
  background-image: linear-gradient(
    rgba(44, 44, 45, 0.7),
    rgba(44, 44, 45, 0.7)
  );
`;
