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
  const className = initials.length > 2 ? 'movieRowAvatar movieRowAvatar__smallText' :  'movieRowAvatar movieRowAvatar__mediumText';

  return (
    <div className={className}>{ initials }</div>
  );
};
