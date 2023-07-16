import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const LayoutContainer = styled.header`
  height: 40px;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
  border-bottom: 2px solid #1d1410;
  background: linear-gradient(
    180deg,
    rgb(92 72 57 / 46%) 2%,
    rgb(126 106 90 / 52%) 60%,
    rgb(41 33 28 / 76%) 100%
  );
  font-weight: 500;
  font-weight: 500;
  list-style: none;
  color: black;
  @media (max-width: 350px) {
    gap: 10px;
  }
  span {
    margin-right: auto;
  }
  p {
    margin: 0;
    margin-right: auto;
    color: #351111;

    @media (max-width: 440px) {
      display: none;
    }
  }
  a {
    font-weight: 900;
    text-decoration: none;
    color: white;
  }
`;

export const NavItem = styled(NavLink)`
  &.active {
    color: #cddc39;
  }
  &:hover:not(.active) {
    color: #cddc39;
    text-decoration: underline;
  }
`;
