import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <div>
      <nav
        style={{
          display: 'flex',
          // justifyContent: 'space-between',
          gap: 30,
          fontWeight: 700,
          padding: 5,
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </nav>
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default SharedLayout;
