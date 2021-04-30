import React from 'react';
import './MovieRowAvatar.css';

interface MovieRowAvatarProps {
  movieName: string;
}

export const MovieRowAvatar: React.FC<MovieRowAvatarProps> = ({ movieName }) => {
  // Transform the name of the movie to its initials.
  const initials = movieName
    // Split each word in the title into an array.
    .split(' ')
    // Filter out special characters ':' and '-'.
    .filter(word => !word.includes(':') && !word.includes('-'))
    // Grab the first character of each word.
    .map(word => word.charAt(0))
    // Join the array back into a string of initials.
    .join('')
    // Take a max of 3 characters for the initials.
    .substring(0, 3);

  // Calculate font size based on number of initials.
  const fontSize = initials.length > 2 ? '16px' :  '24px';

  return (
    <div className="movieRowAvatar" style={{ fontSize: fontSize }}>{ initials }</div>
  );
};
