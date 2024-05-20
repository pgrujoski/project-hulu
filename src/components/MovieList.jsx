import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies?.map((movie) => (
        <MovieCard 
          key={movie.id}
          img={movie.poster_path}
          title={movie.title}
          description={movie.overview}
          release_date={movie.release_date}
          rating={movie.vote_average}
        />
      ))}
    </div>
  );
};

export default MovieList;
