import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MealCard from '../../components/meal-card/meal-card.component'
import { getSearchedResults } from '../../utils/fetch.utils'
import {
  RLink,
  SearchContainer,
  SearchPageContainer,
} from './searched-page.styles.component'

function Searched() {
  const [searchResults, setSearchResults] = useState([])
  const { input } = useParams()

  useEffect(() => {
    const fetchData = async () => {
      const res = await getSearchedResults(input)
      setSearchResults(res.results)
    }
    fetchData()
  }, [input])

  return (
    <SearchPageContainer>
      <SearchContainer>
        {searchResults.map(({ title, id, image }) => {
          return (
            <RLink to={'/recipe/' + id} key={id}>
              <MealCard key={id} title={title} imageUrl={image} />
            </RLink>
          )
        })}
      </SearchContainer>
    </SearchPageContainer>
  )
}

export default Searched
