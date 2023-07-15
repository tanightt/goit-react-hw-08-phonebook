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
  border-bottom: 2px solid #464d72;
  background: linear-gradient(
    180deg,
    rgb(92 72 57) 2%,
    rgb(126 106 90) 60%,
    rgba(75, 62, 53, 1) 100%
  );
  font-weight: 500;
  list-style: none;
  color: black;
  span {
    margin-right: auto;
  }
  p {
    margin: 0;
    margin-right: auto;
    color: #351111;
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
