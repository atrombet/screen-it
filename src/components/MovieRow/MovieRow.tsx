import React from 'react';
import { Movie } from '../../interfaces';
import './MovieRow.css';

interface MovieRowProps {
  movie: Movie
}

export const MovieRow: React.FC<MovieRowProps> = ({ movie }) => {
  return (
    <div className="movieRow">
      <div></div>
      <div>
        <div className="movieRow__name">{ movie.name }</div>
        <div className="movieRow__category">{ movie.category }</div>
      </div>
      <div>{ movie.rating }</div>
    </div>
  );
};
