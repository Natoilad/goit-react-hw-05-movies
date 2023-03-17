// import Movies from 'pages/Movies/Movies';
// import MoviesDetails from 'pages/MoviesDetails/MoviesDetails';
import { lazy } from 'react';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Route, Routes } from 'react-router-dom';
// import Cast from './Cast/Cast';
// import Reviews from './Reviews/Reviews';
const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const MoviesDetails = lazy(() =>
  import('../pages/MoviesDetails/MoviesDetails')
);

export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // fontSize: 40,
        color: '#010101',
      }}
    >
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MoviesDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </div>

    // React homework template
  );
};
