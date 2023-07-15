const { styled } = require('styled-components');

export const Card = styled.div`
  height: 100vh;
  padding: 20px;
  margin: 0 auto;
  text-align: center;
  background: linear-gradient(
    160deg,
    rgb(251 252 201) 0%,
    rgb(240 184 141) 35%,
    rgb(78 50 36) 100%
  );

  h1 {
    margin: 0;
  }
`;
