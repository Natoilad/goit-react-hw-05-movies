import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Container = styled.ul`
display: flex;
    gap: 30px;
    list-style: none;
    padding-bottom: 30px;
    border-bottom: 1px solid;
    color:black;
}`;
export const Links = styled(Link)`
  margin: 10px;
  outline: black solid 2px;
  border-radius: 4px;
  color: black;
  padding: 5px;
  text-decoration: none;
  :hover {
    background: black;
    color: white;
  }
`;
export const DefoultContainer = styled.div`
  display: 'block';
  gap: 50px;
  border-bottom: 1px solid;
  @media (min-width: 600px) {
    display: flex;
  }
`;
