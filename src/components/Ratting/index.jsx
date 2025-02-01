import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
function Rating({ numberOfStar = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (getCurrentId) => {
    setRating(getCurrentId);
  };
  const handleLeave = () => {
    setHover(rating);
  };
  const handleMove = (getCurrentId) => {
    setHover(getCurrentId);
  };
  return (
    <div className="flex justify-center m-5">
      {[...Array(numberOfStar)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            onClick={() => handleClick(index)}
            onMouseMove={() => handleLeave()}
            onMouseLeave={() => handleMove(index)}
            size={28}
            className={
              index <= (hover || rating) ? "text-yellow-300" : "text-gray-400"
            }
          />
        );
      })}
    </div>
  );
}

export default Rating;
