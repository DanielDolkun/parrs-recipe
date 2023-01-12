import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

export const MealTypePage = styled.div`
  ${(props) => {
    switch (props.typeTitle) {
      case 'Appetizers':
        return css`
          background: linear-gradient(to right, #857d4cd6, #292929);
        `

      case 'Main-course':
        return css`
          background: linear-gradient(to right, #521313df, #292929);
        `
      case 'Beverage':
        return css`
          background: linear-gradient(to right, #102d3fcf, #292929);
        `
      case 'Dessert':
        return css`
          background: linear-gradient(to right, #320d43c8, #292929);
        `
      case 'Snack':
        return css`
          background: linear-gradient(to right, #7d4319e3, #292929);
        `

      default:
        return css`
          background: linear-gradient(to right, #292929, #5c5c5c);
        `
    }
  }};
`
export const MealTypeTitle = styled.h2`
  font-family: 'Caveat', cursive;
  ${(props) => {
    switch (props.mealTitle) {
      case 'Appetizers':
        return css`
          color: rgb(192, 188, 81);
          text-shadow: 4px 4px rgba(64, 68, 12, 0.933);
        `
      case 'Main-course':
        return css`
          color: #cd5d5d;
          text-shadow: 4px 4px rgba(66, 11, 11, 0.933);
        `
      case 'Beverage':
        return css`
          color: #7fc3ee;
          text-shadow: 4px 4px rgba(11, 20, 66, 0.933);
        `
      case 'Dessert':
        return css`
          color: #ce87ee;
          text-shadow: 4px 4px rgba(32, 11, 66, 0.933);
        `
      case 'Snack':
        return css`
          color: #eea773e2;
          text-shadow: 4px 4px rgba(66, 36, 11, 0.933);
        `
      default:
        return css`
          color: rgb(192, 155, 81);
          text-shadow: 4px 4px rgba(68, 43, 12, 0.933);
        `
    }
  }};
  font-size: 4rem;
  width: 95%;
  padding: 1rem 0 1rem 1.5rem;
  text-align: left;
  @media only screen and (max-width: 550px) {
    font-size: 3rem;
  }
`

export const MealContainer = styled.div`
  display: grid;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 1.7rem;
  padding: 1.7rem;
  grid-template-columns: repeat(3, 1fr);
  @media only screen and (max-width: 990px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 660px) {
    grid-template-columns: repeat(1, 1fr);
  } ;
`

export const Tlink = styled(Link)`
  width: 100%;
  display: flex;
  justify-content: center;
`
