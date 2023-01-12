import React from 'react'
import { CardContainer, Gradient } from './popular-card.styles'

const PopularCard = ({ title, imageUrl, id }) => {
  return (
    <CardContainer>
      <img src={imageUrl} alt={title} />
      <h2>{title}</h2>
      <Gradient />
    </CardContainer>
  )
}

export default PopularCard
