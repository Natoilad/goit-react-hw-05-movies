import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
export const Li = styled.li`
  list-style: none;
  padding: 3px;
  margin: 0;
  :hover {
    // border: 1px solid;
  }
`;
export const Links = styled(Link)`
  text-decoration: none;
  color: black;
  :hover {
    color: white;
    background: black;
  }
`;

export const List = styled.ul`
  padding: 0;
  margin: 0;
`;
