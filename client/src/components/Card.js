import React from 'react'

const Card = ({ name, image }) => {
  return (
    <div>
        <img src={image} alt={name} />
        <h1>{name}</h1>
    </div>
  )
}

export default Card