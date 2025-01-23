import React, { useEffect, useState } from 'react';
import { FetchMovieDetails } from '../api/api';

const MovieDetails = ({ query, onBack }) => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getMovie = async () => {
      const data = await FetchMovieDetails(query);
      setMovie(data);
    };
    getMovie();
  }, [query]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div className="movie-details">
      <button onClick={onBack}>Back</button>
      <h1>{movie.Title}</h1>
      <img src={movie.Poster} alt={movie.Title} />
      <p><strong>Year:</strong> {movie.Year}</p>
      <p><strong>Plot:</strong> {movie.Plot}</p>
      <p><strong>Director:</strong> {movie.Director}</p>
      <p><strong>Actors:</strong> {movie.Actors}</p>
    </div>
  );
};

export default MovieDetails;
