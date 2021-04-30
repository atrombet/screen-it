import React from 'react';
import { Movie } from '../../interfaces';
import './MovieRow.css';
import { MovieRowAvatar } from './MovieRowAvatar/MovieRowAvatar';
import { Rating } from '../Rating/Rating';
import { CATEGORIES } from '../../constants';

interface MovieRowProps {
  movie: Movie
}

export const MovieRow: React.FC<MovieRowProps> = ({ movie }) => {
  return (
    <div className="movieRow">
      <MovieRowAvatar movieName={movie.name} />
      <div>
        <div className="movieRow__name">{ movie.name }</div>
        <div className="movieRow__category">{ CATEGORIES[movie.category].displayText }</div>
      </div>
      <Rating rating={movie.rating} editable={true} />
    </div>
  );
};
