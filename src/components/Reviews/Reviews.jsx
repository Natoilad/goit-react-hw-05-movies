// const { useState } = require('react');

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'service/serviceAPI';
const Reviews = () => {
  const [moviesReviews, setMoviesReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchReviews(movieId).then(respMovieReviews => {
      setMoviesReviews(respMovieReviews.results);
    });
  }, [movieId]);

  return (
    <>
      {moviesReviews.length > 0 ? (
        moviesReviews.map(({ id, author, content }) => {
          return (
            <ul
              style={{
                padding: 30,
                textAlign: 'center',
                display: 'flex',
                flexWrap: 'wrap',
                gap: 10,
                justifyContent: 'space-between',
                // width: 200,
              }}
              key={id}
            >
              <li>
                <b> Author: {author}</b>
              </li>
              <li>{content}</li>
            </ul>
          );
        })
      ) : (
        <p>Sorry, we dont have any review for this movie!</p>
      )}
    </>
  );
};

export default Reviews;
