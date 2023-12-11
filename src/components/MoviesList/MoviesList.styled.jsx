import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const List = styled.ul`
  margin-top: 25px;
`;

export const MovieItem = styled.li`
  margin-bottom: 10px;
  padding: 7px 20px;
  border-radius: 5px;
  box-shadow: 2px -2px 5px 0 rgba(0, 0, 0, 0.1),
    -2px -2px 5px 0 rgba(0, 0, 0, 0.1), 2px 2px 5px 0 rgba(0, 0, 0, 0.1),
    -2px 2px 5px 0 rgba(0, 0, 0, 0.1);
  font-size: 20px;
  letter-spacing: 2px;
  transition: 0.3s all linear;
`;

export const MovieLink = styled(Link)`
  font-size: 20px;
  font-weight: 600;
  text-decoration: none;
  color: black;
  &:hover,
  &:focus {
    color: #cc00ff;
  }
`;
