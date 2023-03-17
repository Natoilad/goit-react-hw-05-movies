import ListMovies from 'components/ListMovies/ListMovies';
import Loader from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { fetchTrending } from 'service/serviceAPI';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetchTrending()
      .then(respMovies => {
        setMovies(respMovies.results);
      })
      .catch(error => error.message)
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div>
        <h2>Trending today</h2>
        <ListMovies movies={movies} />
        {loading && <Loader />}
      </div>
    </>
  );
};
export default Home;
