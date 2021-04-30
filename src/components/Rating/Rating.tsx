import React from 'react';
import './Rating.css';
import star from '../../icons/star.svg';
import starFilled from  '../../icons/star-filled.svg';

interface RatingProps {
  rating: number;
  editable: boolean;
  onRatingSelected?: (value: number) => void;
}

export const Rating: React.FC<RatingProps> = ({ rating, editable, onRatingSelected }) => {

  const handleStarClick = (index: any) => {
    if (editable && !!onRatingSelected) {
      onRatingSelected(index);
    }
  }

  const stars = [];
  for (let i = 1; i <= 5; i++) {
    const icon = i <= rating ?
      <img src={starFilled} key={i} alt="Filled star icon" onClick={() => handleStarClick(i)}/> :
      <img src={star} key={i} alt="Empty star icon" onClick={() => handleStarClick(i)}/>;
    stars.push(icon);
  }

  return (
    <div className="rating">
      { stars }
    </div>
  );
};
