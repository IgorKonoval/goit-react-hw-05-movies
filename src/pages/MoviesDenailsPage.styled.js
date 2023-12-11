import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MovieWrapper = styled.div`
  margin-left: 15px;
`;

export const MovieTitle = styled.h1`
  margin-bottom: 15px;
`;

export const MovieSubtitle = styled.h2`
  margin-bottom: 10px;
  margin-top: 15px;
`;

export const AddInfo = styled.h3`
  margin-bottom: 10px;
  margin-top: 65px;
`;

export const Button = styled.button`
  padding: 8px 16px;
  margin: 0 20px;
  border-radius: 5px;
  background-color: #3f51b5;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: inline-block;
  color: #fff;
  border: 0;
  text-decoration: none;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 180px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
`;

export const Container = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const GenresList = styled.ul`
  display: inline-flex;
`;

export const LinkAdd = styled(Link)`
  &:hover,
  &:focus {
    color: orange;
  }
`;
