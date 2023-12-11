import styled from 'styled-components';

export const CastList = styled.ul`
  margin-top: 15px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const CastItem = styled.li`
  flex-basis: calc((100% - 40px) / 5);
  font-family: 'Trebuchet MS', 'Lucida Sans';
  padding: 7px 20px;
  border-radius: 5px;
  box-shadow: 2px -2px 5px 0 rgba(0, 0, 0, 0.1),
    -2px -2px 5px 0 rgba(0, 0, 0, 0.1), 2px 2px 5px 0 rgba(0, 0, 0, 0.1),
    -2px 2px 5px 0 rgba(0, 0, 0, 0.1);
  font-size: 20px;
  letter-spacing: 2px;
  transition: 0.3s all linear;
`;
