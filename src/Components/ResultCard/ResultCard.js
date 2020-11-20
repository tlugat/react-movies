import React from 'react';
import  './ResultCard.scss';
import Star from '../AssetsComponents/Star/Star';

export const ResultCard = ({ movie }) => {
    return (
        <li className="Card">
            <div className="Card__title">
            {movie.title}
            </div>
            

<img src={`https://image.tmdb.org/t/p/w220_and_h330_face/${movie.poster_path}`} alt={`${movie.title} Poster`}></img>
<div className="Card__average">
  <span>
    <Star></Star>
    <div className="Card__averageTitle">
      {movie.vote_average}/10
    </div>
  </span>
  </div>
  </li>
    )
}

export default ResultCard;