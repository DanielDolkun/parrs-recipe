import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MealTypes from './meal-type-page/meal-type-page.component'
import Home from './home/home.compnent'
import Searched from './searched-page/searched-page.component'
import RecipePage from './recipe/recipe.component'

const Pages = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/types/:type' element={<MealTypes />} />
      <Route path='/searched/:input' element={<Searched />} />
      <Route path='/recipe/:id' element={<RecipePage />} />
    </Routes>
  )
}

export default Pages
