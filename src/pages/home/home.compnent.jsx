import React from 'react'
import Popular from '../../components/popular/popular.component'
import { CategoryTitle, HomeContainer } from './home.styles'

const Home = () => {
  return (
    <HomeContainer>
      <CategoryTitle>Popular</CategoryTitle>
      <Popular />
    </HomeContainer>
  )
}

export default Home
