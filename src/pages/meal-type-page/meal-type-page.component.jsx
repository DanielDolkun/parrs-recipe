import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MealCard from '../../components/meal-card/meal-card.component'
import { getType } from '../../utils/fetch.utils'
import {
  MealContainer,
  MealTypePage,
  MealTypeTitle,
  Tlink,
} from './meal-type-page.styles'

const MealTypes = () => {
  const [mealType, setMealType] = useState([])
  const { type } = useParams()
  const typeTitle = type.charAt(0).toUpperCase() + type.substring(1)

  useEffect(() => {
    const fetchData = async () => {
      const res = await getType(type)
      setMealType(res.results)
    }
    fetchData()
  }, [type])
  return (
    <MealTypePage typeTitle={typeTitle}>
      <MealTypeTitle mealTitle={typeTitle}>{typeTitle}</MealTypeTitle>
      <MealContainer>
        {mealType.map(({ title, id, image }) => {
          return (
            <Tlink to={'/recipe/' + id} key={id}>
              <MealCard key={id} title={title} imageUrl={image} />
            </Tlink>
          )
        })}
      </MealContainer>
    </MealTypePage>
  )
}

export default MealTypes
