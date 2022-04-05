import React from 'react'
import styled from 'styled-components'

const Card = ({ name, image }) => {
  return (
    <Wrapper>
        <img src={image} alt={name} />
        <h2>{name}</h2>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    width: 90%;
    box-shadow: 0 0 2px 2px gray;
    padding: .5em;
    border: 1px solid gray;
    border-raduis: 10px;
    img {
        width: 100%;

    }
`

export default Card