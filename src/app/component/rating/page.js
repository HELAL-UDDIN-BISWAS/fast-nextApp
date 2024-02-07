"use client";
import React, { useState } from 'react';

const StarRating = () => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
  };

  return (
    <div>
      {[1, 2, 3, 4, 5].map((star) => (
        <span className=''
          key={star}
          onClick={() => handleStarClick(star)}
          style={{
            cursor: 'pointer',
            color: star <= rating ? 'gold' : 'gray',
          }}
        >
          &#9733;
        </span>
      ))}
      <p>Selected Rating: {rating}</p>
    </div>
  );
};

export default StarRating;
