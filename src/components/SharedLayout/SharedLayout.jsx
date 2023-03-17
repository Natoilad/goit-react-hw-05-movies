import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <div>
      <nav>
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
