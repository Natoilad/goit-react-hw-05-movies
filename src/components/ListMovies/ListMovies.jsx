import { Outlet, useLocation } from 'react-router-dom';
import { Li, Links, List } from './ListMovies.styled';
export const ListMovies = ({ movies }) => {
  const location = useLocation();
  return (
    <>
      <List>
        {movies.map(({ id, title }) => {
          return (
            <Li key={id}>
              <Links to={`/movies/${id}`} state={{ from: location }}>
                {title}
              </Links>
            </Li>
          );
        })}
      </List>
      <Outlet />
    </>
  );
};
export default ListMovies;
