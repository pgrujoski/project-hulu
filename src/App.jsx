import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import MovieList from './components/MovieList';
import Nav from './components/Nav'
import './App.css';
import './components/Header.css';
import './components/Nav.css'

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
    }
  };

  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', 
      options
    )
    .then(response => response.json())
    .then(response => {
      setData(response.results);
      setLoading(false);
    })
    .catch(err => {
      setError(err);
      setLoading(false);
    });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <Header />
      <Nav />
      <MovieList movies={data} />
    </>
  );
}
export default App;
