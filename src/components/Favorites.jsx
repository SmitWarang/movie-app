import React, { useState, useEffect } from 'react';

const Favorites = ({ onMovieSelect }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(savedFavorites);
  }, []);

  return (
    <div className="favorites">
      <h1>Your Favorites</h1>
      <div className="movie-list">
        {favorites.map((movie) => (
          <div key={movie.imdbID} className="movie-card" onClick={() => onMovieSelect(movie.imdbID)}>
            <img src={movie.Poster} alt={movie.Title} />
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
