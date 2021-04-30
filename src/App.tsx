import React, { useState } from 'react';
import './App.css';
import { Movie } from './interfaces';
import { MOVIES } from './constants';
import { MovieRow, NewMovieForm } from './components';

const App: React.FC = () => {
  // Set movies state.
  const [ movies, setMovies ] = useState<Movie[]>(MOVIES);

  // Define function to add a movie to state.
  const addMovie = (movie: Movie) => {
    setMovies(state => {
      return [ ...state, movie ];
    });
  };

  // Define an alphabetize sorter.
  const alphabetize = (a: Movie, b: Movie) => {
    return a.name.toLowerCase() === b.name.toLowerCase() ?
      0 :
      a.name.toLowerCase() < b.name.toLowerCase() ?
        -1 :
        1;
  };

  return (
    <div className="screenIt">
      <h1 className="screenIt__header">Screen it</h1>
      <NewMovieForm addMovie={addMovie} />
      {movies.sort(alphabetize).map((movie, i) => (
        <MovieRow key={i} movie={movie} />
      ))}
    </div>
  );
}

export default App;
