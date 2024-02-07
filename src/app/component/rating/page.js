"use client";
import React, { useState } from 'react';
import "./../../../app/index.css"
import axios from 'axios';

const StarRating = () => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
  };

  const ratingData=async()=>{
    console.log(rating)
   await axios.post("http://localhost:5000/rating",{
    ratings:rating}
    )
    .then(res=>console.log(res))
    .catch(error=>console.error(error))
  }

  return (
    <div className='max-w-6xl mx-auto'>
      <h1 className='hove'>Rating</h1>
      <div className='non'>
      {[1, 2, 3, 4, 5].map((star) => (
        <span 
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
      <br></br>
      <button onClick={ratingData} className='bg-slate-500 rounded py-0 px-2'>Rating</button>
      </div>
     
      <p className=''>Selected Rating: {rating}</p>
    </div>
  );
};

export default StarRating;
