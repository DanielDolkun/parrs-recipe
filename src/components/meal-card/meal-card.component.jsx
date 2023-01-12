import React from 'react'
import { MealIntroCard, MealIntroCardGradient } from './meal-card.styles'

function MealCard({ title, imageUrl }) {
  return (
    <MealIntroCard>
      <img src={imageUrl} alt={title} />
      <h2>{title}</h2>
      <MealIntroCardGradient />
    </MealIntroCard>
  )
}

export default MealCard
