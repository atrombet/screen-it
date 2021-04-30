import React from 'react';
import './Rating.css';
import star from '../../icons/star.svg';
import starFilled from  '../../icons/star-filled.svg';

interface RatingProps {
  rating: number;
  editable: boolean
}

export const Rating: React.FC<RatingProps> = ({ rating, editable }) => {

  const stars = [];
  for (let i = 1; i <= 5; i++) {
    const icon = i <= rating ?
      <img src={starFilled} key={i} alt="Filled star icon"/> :
      <img src={star} key={i} alt="Empty star icon"/>;
    stars.push(icon);
  }

  return (
    <div className="rating">
      { stars }
    </div>
  );
};
