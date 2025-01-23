const API_KEY = '8d73ef5e'; // Replace with your actual API key
const BASE_URL = 'https://www.omdbapi.com/';

export const FetchMoviesByTitle = async (title) => {
  try {
    const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=${title}`);
    const data = await response.json();
    if (data.Response === 'True') {
      return data;
    } else {
      alert(data.Error || 'No results found!');
      return [];
    }
  } catch (error) {
    console.error('Error fetching movies:', error);
    alert('An error occurred while fetching movies. Please try again.');
    return [];
  }
};

export const FetchMovieDetails = async (query) => {
  try {
    const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=${query}`);
    const data = await response.json();
    if (data.Response === 'True') {
      return data;
    } else {
      alert(data.Error || 'No details found!');
      return null;
    }
  } catch (error) {
    console.error('Error fetching movie details:', error);
    alert('An error occurred while fetching movie details. Please try again.');
    return null;
  }
};

