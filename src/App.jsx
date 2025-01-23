import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import Favorites from './components/Favorites';
import MovieDetails from './components/MovieDetails';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [view, setView] = useState('home'); // 'home', 'favorites', or 'details'
  const [selectedMovieId, setSelectedMovieId] = useState(null);

  const handleViewChange = (newView, movieId = null) => {
    setView(newView);
    if (movieId) setSelectedMovieId(movieId);
  };

  return (
    <div>
      <nav>
        <button onClick={() => handleViewChange('home')}>Home</button>
        <button onClick={() => handleViewChange('favorites')}>Favorites</button>
      </nav>

      {view === 'home' && (
        <>
          <SearchBar setMovies={setMovies} />
          <MovieList movies={movies} onMovieSelect={(id) => handleViewChange('details', id)} />
        </>
      )}

      {view === 'favorites' && <Favorites onMovieSelect={(id) => handleViewChange('details', id)} />}

      {view === 'details' && selectedMovieId && (
        <MovieDetails id={selectedMovieId} onBack={() => handleViewChange('home')} />
      )}
    </div>
  );
};

export default App;
