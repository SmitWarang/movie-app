import React, { useState } from 'react';
import { FetchMoviesByTitle } from '../api/api';

const SearchBar = ({ setMovies }) => {
  const [query, setQuery] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    if (query.trim() === '') {
      alert('Please enter a movie title!');
      return;
    }
    const movies = await FetchMoviesByTitle(query);
    setMovies(movies.Search || []); // OMDB API returns `Search` for results
  };

  return (
    <form onSubmit={handleSearch} className="search-bar">
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search for a movie..." />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
