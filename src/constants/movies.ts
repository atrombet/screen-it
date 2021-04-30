import { Category } from "../enums";
import { Movie } from "../interfaces";

export const MOVIES: Movie[] = [
  {
    name: 'Death Becomes Her',
    category: Category.Comedy,
    rating: 3
  },
  {
    name: 'Ghostbusters',
    category: Category.Comedy,
    rating: 5
  },
  {
    name: 'Harry Potter - Sorcerer\'s Stone',
    category: Category.Drama,
    rating: 4
  },
  {
    name: 'Jurrasic Park',
    category: Category.Action,
    rating: 4
  },
  {
    name: 'The Sandlot',
    category: Category.Comedy,
    rating: 4
  }
];
