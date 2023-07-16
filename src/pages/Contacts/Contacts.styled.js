const { styled } = require('styled-components');

export const Card = styled.div`
  padding-bottom: 200px;
  margin: 0 auto;
  text-align: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: rgba(78, 50, 36, 0.5);
  background: linear-gradient(
    160deg,
    rgb(251 252 201 / 89%) 0%,
    rgb(210 190 175 / 97%) 35%,
    rgb(78 50 36) 100%
  );

  h1 {
    margin: 0;
  }
`;
