import React, { useState } from 'react';

const StarRating = () => {
    const [rating, setRating] = useState(0);
  
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <div 
            key={star} 
            className="w-8 h-8 bg-green-500 m-1 flex items-center justify-center cursor-pointer"
            onClick={() =>{star !== rating?setRating(star):setRating(0)} }
          >
            <svg
              className={`w-6 h-6 ${star <= rating ? 'text-red-400' : 'text-gray-300'}`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
        ))}
      </div>
    );
  };

  export default StarRating;