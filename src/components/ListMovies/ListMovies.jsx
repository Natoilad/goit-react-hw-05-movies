import { Link, Outlet, useLocation } from 'react-router-dom';
// import { PropTypes } from 'prop-types';
export const ListMovies = ({ movies }) => {
  const location = useLocation();
  return (
    <>
      <ul>
        {movies.map(({ id, title }) => {
          return (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
      <Outlet />
    </>
  );
};
export default ListMovies;
