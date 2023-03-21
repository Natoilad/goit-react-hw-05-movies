import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Button = styled.button`
  outline: black solid 2px;
  border-radius: 4px;
  background: transparent;
  border: none;
  margin: 10px;
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  width: 110px;
  :hover {
    color: white;
    background: black;
  }
`;
export const LinkGoBack = styled(Link)`
  text-decoration: none;
`;
