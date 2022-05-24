import React from 'react';

function Rating({ children }) {
  const numberStars = Math.round(children);
  const stars = [...Array(5)].map((x, i) => (i < numberStars ? '★' : '☆'));

  return (
    <div>
      Rating
      {stars}
    </div>
  );
}

export default Rating;
