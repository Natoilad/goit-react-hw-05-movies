import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Button = styled.button`
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
    border-radius: 4px;
  }
`;
export const LinkGoBack = styled(Link)`
  text-decoration: none;
`;
