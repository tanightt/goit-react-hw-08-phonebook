const { styled } = require('styled-components');

export const CardsContacts = styled.ul`
  width: 310px;
  margin: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  list-style: none;
`;

export const CardContact = styled.li`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: 500;
`;

export const DeleteBtn = styled.button`
  width: 40px;
  padding: 2px;
  background-color: inherit;
  border-radius: 15%;
  border-color: inherit;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: indianred;
  }
`;

export const CallBtn = styled.a`
  width: 40px;
  text-align: center;
  background-color: inherit;
  border-radius: 15%;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #7cc47f;
  }
`;
