import React from 'react'
import styled from 'styled-components'

const Card = ({ name, image }) => {
  return (
    <Wrapper>
        <img src={image} alt={name} />
        <div className='info'>
            <h2>{name}</h2>
            <button>Book Now</button>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    width: 300px;
    margin: 1em;
    box-shadow: 0 0 4px 4px lightgray;
    padding: .5em;
    border: 1px solid lightgray;
    border-raduis: 10px;
    img {
        width: 100%;
        height: 180px;
    }
    .info {
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 50px;
        padding: .3em;
        button {
            padding: .4rem;
            background: transparent;
            border: 3px solid #222;
            font-weight: bold;
        }
    }
`

export default Card