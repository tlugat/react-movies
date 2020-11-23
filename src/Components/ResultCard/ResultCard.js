import React from 'react';
import  './ResultCard.scss';

import MovieCard from '../MovieCard/MovieCard';

export const ResultCard = ({ movie }) => {
    return (
     
       <MovieCard  media={movie} filters={movie.type}/>
    )
}

export default ResultCard;