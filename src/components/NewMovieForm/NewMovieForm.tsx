import React from 'react';
import { Movie } from '../../interfaces';
import './NewMovieForm.css';
import { Rating } from '../Rating/Rating';
import { CATEGORIES } from '../../constants';
interface NewMovieFormProps {
  addMovie: (movie: Movie) => void
}

export const NewMovieForm: React.FC<NewMovieFormProps> = ({ addMovie }) => {
  return (
    <form className="newMovieForm">
      <div className="newMovieForm__grid">
        <div className="newMovieForm__nameRow">
          <label>Name</label>
          <input placeholder="Name of the movie"/>
        </div>
        <div className="newMovieForm__categoryRow">
          <label>Category</label>
          <select>
            <option value="" disabled>Select a category</option>
            {Object.keys(CATEGORIES).map(key => (
              <option key={key} value={CATEGORIES[key].value}>{CATEGORIES[key].displayText}</option>
            ))}
          </select>
        </div>
        <div>
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
