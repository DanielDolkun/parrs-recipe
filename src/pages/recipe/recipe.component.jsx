import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MainSection from '../../components/main-section/main-section.component'
import SideSection from '../../components/side-section/side-section.component'
import { getSingleRecipe } from '../../utils/fetch.utils'
import {
  DetailSectionsContainer,
  HeadSection,
  RecipeContainer,
} from './recipe.styles'

const RecipePage = () => {
  const [details, setDetails] = useState({})
  const { id } = useParams()
  const [arrived, setArrived] = useState(false)

  const fetchData = async () => {
    const res = await getSingleRecipe(id)
    setDetails(res) // title/ image/ summary/ extendedIngredients -> name, amount/ steps -> number /step
    setArrived(true)
  }

  useEffect(() => {
    fetchData()
  }, [id])

  return (
    <RecipeContainer>
      <HeadSection>
        <h2>{details.title}</h2>
      </HeadSection>
      <DetailSectionsContainer>
        <MainSection
          title={details.title}
          imageUrl={details.image}
          description={details.summary}
        />

        {arrived ? (
          <SideSection
            ingredients={details.extendedIngredients}
            instructions={details.analyzedInstructions[0]}
          />
        ) : (
          <p>wait</p>
        )}
      </DetailSectionsContainer>
    </RecipeContainer>
  )
}

export default RecipePage
