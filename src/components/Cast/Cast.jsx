import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from 'service/serviceAPI';
import { AiOutlineFileImage } from 'react-icons/ai';
const Cast = () => {
  const [moviesCast, setMoviesCast] = useState([]);
  const { movieId } = useParams();

  // console.dir(moviesCast);
  useEffect(() => {
    fetchCast(movieId).then(respMovieCast => {
      setMoviesCast(respMovieCast.cast);
    });
  }, [movieId]);

  return (
    <div
      style={{
        padding: 30,
        textAlign: 'center',
        display: 'flex',
        flexWrap: 'wrap',
        gap: 10,
        justifyContent: 'space-between',
        // width: 200,
      }}
    >
      {moviesCast.length > 0 ? (
        moviesCast.map(({ id, profile_path, character, name }) => (
          <div
            style={{
              border: '1px solid',
              padding: 10,
              width: 200,
              justifyContent: 'space-between',
              display: 'flex',
              flexDirection: 'column',
            }}
            key={id}
          >
            {/* {console.log(profile_path)} */}
            {profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                alt={name}
                width={200}
              />
            ) : (
              <AiOutlineFileImage size={200} />
            )}
            <p>
              <b>{name}</b>
            </p>
            <p>
              Character:
              <br /> {character.substr(0, 9)}
            </p>
          </div>
        ))
      ) : (
        <p> Sorry, there isn't any info</p>
      )}
    </div>
  );
};
export default Cast;
