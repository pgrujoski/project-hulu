import React from 'react';

const MovieCard = ({ img, type, title, description, release_date, rating }) => {
  const BASE_URL = 'https://image.tmdb.org/t/p/original/';

  return (
    <div className='card__component'>
      <img width={220} src={`${BASE_URL}${img}`} alt={title} />
      <p>{description}</p>
      <h2>{title}</h2>
      <span>
         {release_date} · {rating}
      </span>
    </div>
  );
};

export default MovieCard;
