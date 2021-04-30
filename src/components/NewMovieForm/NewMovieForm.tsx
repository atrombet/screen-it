import React from 'react';
import { Movie } from '../../interfaces';
import './NewMovieForm.css';
import { Category } from '../../enums';

interface NewMovieFormProps {
  addMovie: (movie: Movie) => void
}

export const NewMovieForm: React.FC<NewMovieFormProps> = ({ addMovie }) => {
  // Create category options from the enum.
  const options = [];
  for (const value in Category) {
    options.push(<option key={value} value={value}>{value}</option>);
  }

  return (
    <form className="newMovieForm">
      <div className="newMovieForm__nameRow">
        <label>Name</label>
        <input placeholder="Name of the movie"/>
      </div>
      <div className="newMovieForm__categoryRow">
        <label>Category</label>
        <select>
          <option value="" disabled selected>Select a category</option>
          {options}
        </select>
      </div>
      <div>
        <label>Rating</label>
        <input placeholder="Rating"/>
      </div>
      <button type="submit">Add Movie</button>
    </form>
  );
}
