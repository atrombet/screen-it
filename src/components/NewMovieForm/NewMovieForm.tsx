import React, { useState } from 'react';
import { Movie } from '../../interfaces';
import './NewMovieForm.css';
import { Rating } from '../Rating/Rating';
import { ScreenItSelect } from '../ScreenItSelect/ScreenItSelect';
import { CATEGORIES } from '../../constants';

interface NewMovieFormProps {
  addMovie: (movie: Movie) => void
}

export const NewMovieForm: React.FC<NewMovieFormProps> = ({ addMovie }) => {
  const [ newMovie, setNewMovie ] = useState<Movie>({ name: '', category: '', rating: 0 });

  return (
    <form className="newMovieForm">
      <div className="newMovieForm__grid">
        <div className="newMovieForm__gridRow newMovieForm__nameRow">
          <label>Name</label>
          <input placeholder="Name of the movie"/>
        </div>
        <div className="newMovieForm__gridRow newMovieForm__categoryRow">
          <label>Category</label>
          <ScreenItSelect options={Object.values(CATEGORIES)} selectedOption={''} onSelect={() => {}} />
        </div>
        <div className="newMovieForm__gridRow">
          <label>Rating</label>
          <span className="newMovieForm__ratingCell">
            <Rating rating={0} editable={true} />
          </span>
        </div>
      </div>
      <button type="submit">Add Movie</button>
    </form>
  );
}
