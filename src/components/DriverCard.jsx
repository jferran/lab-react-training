//import React from 'react'

function DriverCard({name, rating, img, car}) {
    const {model, licensePlate} = car
    const numberStars = Math.round(rating);
    const stars = [...Array(5)].map((x, i) => (i < numberStars ? '★' : '☆'));
  return (
    <div>
    {img}
    {name}
    {stars}
    {model} {licensePlate}
    </div>
  )
}

export default DriverCard