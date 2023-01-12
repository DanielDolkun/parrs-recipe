import React from 'react'
import SearchBar from '../searchBar/search-bar.component'
import { CatContainer, CatIcons, NavContainer, SLink } from './navbar.styles'

const NavBar = () => {
  return (
    <NavContainer>
      <h3>Parr's Recipes</h3>
      <SearchBar />
      <CatContainer>
        <SLink
          to={'/'}
          style={{ textDecoration: 'none', color: 'inherit' }}
          name={'Popular'}
        >
          <CatIcons>
            <span className='material-symbols-outlined'>language</span>
            <span className='typeName'>Popular</span>
          </CatIcons>
        </SLink>

        <SLink
          to={'/types/appetizers'}
          style={{ textDecoration: 'none', color: 'inherit' }}
          name={'Appetizers'}
        >
          <CatIcons>
            <span className='material-symbols-outlined'>tapas</span>
            <span className='typeName'>Appetizers</span>
          </CatIcons>
        </SLink>

        <SLink
          to={'/types/main-course'}
          style={{ textDecoration: 'none', color: 'inherit' }}
          name={'Main Course'}
        >
          <CatIcons>
            <span className='material-symbols-outlined'>restaurant</span>
            <span className='typeName'>Main Course</span>
          </CatIcons>
        </SLink>

        <SLink
          to={'/types/beverage'}
          style={{ textDecoration: 'none', color: 'inherit' }}
          name={'Beverages'}
        >
          <CatIcons>
            <span className='material-symbols-outlined'>wine_bar</span>
            <span className='typeName'>Beverages</span>
          </CatIcons>
        </SLink>

        <SLink
          to={'/types/dessert'}
          style={{ textDecoration: 'none', color: 'inherit' }}
          name={'Dessert'}
        >
          <CatIcons>
            <span className='material-symbols-outlined'>icecream</span>
            <span className='typeName'>Dessert</span>
          </CatIcons>
        </SLink>

        <SLink
          to={'/types/snack'}
          style={{ textDecoration: 'none', color: 'inherit' }}
          name={'Snack'}
        >
          <CatIcons>
            <span className='material-symbols-outlined'>kebab_dining</span>
            <span className='typeName'>Snack</span>
          </CatIcons>
        </SLink>
      </CatContainer>
    </NavContainer>
  )
}

export default NavBar
