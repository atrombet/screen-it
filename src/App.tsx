import React, { useState } from 'react';
import './App.css';
import { Movie } from './interfaces';
import { MOVIES } from './constants';
import { MovieRow, NewMovieForm } from './components';

const App: React.FC = () => {
  // Set movies state.
  const [ movies, setMovies ] = useState<Movie[]>(MOVIES);

  // Define fucntion to add a movie to state.
  const addMovie = (movie: Movie) => {
    setMovies(state => {
      state.push(movie);
      return state;
    });
  };

  return (
    <div className="screenIt">
      <h1 className="screenIt__header">Screen it</h1>
      <NewMovieForm addMovie={addMovie} />
      {movies.map((movie, i) => (
        <MovieRow key={i} movie={movie} />
      ))}
    </div>
  );
}

export default App;
