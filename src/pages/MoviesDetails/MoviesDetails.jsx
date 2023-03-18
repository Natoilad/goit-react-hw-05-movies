import { fetchDetailsMovie } from 'service/serviceAPI';
import { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { TurningBack } from 'components/TurningBack/TurningBack';

const MoviesDetails = () => {
  const [moviesDetails, setMoviesDetails] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const turningBack = location.state?.from ?? `/movies`;
  // console.log(turningBack);

  useEffect(() => {
    // console.log('hello');
    fetchDetailsMovie(movieId).then(respMovieId => {
      setMoviesDetails(respMovieId);
    });
  }, [movieId]);
  const { poster_path, title, genres, overview, vote_average } = moviesDetails;

  return (
    <>
      <TurningBack to={turningBack} />
      <div>
        {poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={title}
            width={350}
          />
        ) : (
          <div>Loadind...</div>
        )}
        <h2>{title}</h2>
        <p>Score:{vote_average}</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h4>Genres</h4>
        {genres && <p>{genres.map(genre => genre.name).join(', ')}</p>}
        <h5>Additional information</h5>
        <ul
          style={{
            display: 'flex',
            gap: 30,
            listStyle: 'none',
          }}
        >
          <li>
            <Link to="cast">cast</Link>
          </li>
          <li>
            <Link to="reviews">reviews</Link>
          </li>
        </ul>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};
export default MoviesDetails;
