import React, { ChangeEvent, useState } from 'react';
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

  // Define an event handler for a name change.
  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewMovie(state => ({ ...state, name: event.target.value }));
  };

  // Define an event handler for a category change.
  const handleCategoryChange = (value: string) => {
    setNewMovie(state => ({ ...state, category: value }));
  };

  // Define an event handler for a rating change.
  const handleRatingChange = (value: number) => {
    setNewMovie(state => ({ ...state, rating: value }));
  };

  return (
    <form className="newMovieForm">
      <div className="newMovieForm__grid">
        <div className="newMovieForm__gridRow newMovieForm__nameRow">
          <label>Name</label>
          <input value={newMovie.name} placeholder="Name of the movie" onChange={handleNameChange}/>
        </div>
        <div className="newMovieForm__gridRow newMovieForm__categoryRow">
          <label>Category</label>
          <ScreenItSelect options={Object.values(CATEGORIES)} selectedOption={newMovie.category} onSelect={handleCategoryChange} />
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
