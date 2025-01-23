import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <div style={{ border: '1px solid #ddd', padding: '1rem', width: '200px' }}>
      <img src={movie.Poster} alt={movie.Title} style={{ width: '100%' }} />
      <h3>{movie.Title}</h3>
      <p><strong>Year:</strong> {movie.Year}</p>
      <p><strong>Genre:</strong> {movie.Genre}</p>
      <p><strong>IMDb Rating:</strong> {movie.imdbRating}</p>
      <Link to={`/movie/${movie.imdbID}`}>Details</Link>
    </div>
  );
};

export default MovieCard;
