import { Link, Outlet, useLocation } from 'react-router-dom';
// import { PropTypes } from 'prop-types';
export const ListMovies = ({ movies }) => {
  const location = useLocation();
  return (
    <>
      <ul
        style={{
          // listStyle: 'none',
          padding: 0,
          margin: 0,
        }}
      >
        {movies.map(({ id, title }) => {
          return (
            <li
              style={{
                listStyle: 'none',
                padding: 3,
                margin: 0,
              }}
              key={id}
            >
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
