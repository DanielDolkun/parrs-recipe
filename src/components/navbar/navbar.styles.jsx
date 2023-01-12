import { NavLink } from 'react-router-dom'
import styled, { css } from 'styled-components'

export const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background-color: #292929;
  border: solid 3px rgb(178, 143, 74);
  span {
    color: rgb(86, 70, 39);
  }
  h3 {
    font-size: 2rem;
    font-family: 'Ms Madi', cursive;
    text-align: left;
    padding: 0.5rem 1rem;
    color: rgb(226, 188, 112);
    text-shadow: 2px 2px rgba(122, 88, 46, 0.933);
    border-bottom: solid 2px rgb(226, 188, 112);
  }
  @media only screen and (max-width: 375px) {
    h3 {
      font-size: 2rem;
      font-family: 'Ms Madi', cursive;
      width: 100%;
      text-align: center;
    }
  } ;
`

export const CatContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  justify-content: space-around;
  align-items: center;
  @media only screen and (max-width: 750px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media only screen and (max-width: 375px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 260px) {
    grid-template-columns: repeat(1, 1fr);
  } ;
`
export const CatIcons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem 1.3rem;
  background: linear-gradient(
    to right,
    rgba(41, 41, 41, 0.5),
    rgb(192, 155, 81),
    rgb(208, 168, 89),
    rgb(240, 194, 103),
    rgb(208, 168, 89),
    rgb(192, 155, 81),
    rgba(41, 41, 41, 0.5)
  );
  padding: 0.5rem 0.5rem;
  font-family: 'Barlow Condensed', sans-serif;
`

export const SLink = styled(NavLink)`
  &.active {
    ${(props) => {
      switch (props.name) {
        case 'Popular':
          return css`
            span {
              color: rgb(161, 110, 0);
            }
          `
        case 'Appetizers':
          return css`
            span {
              color: rgb(96, 96, 0);
            }
          `
        case 'Main Course':
          return css`
            span {
              color: rgb(129, 56, 56);
            }
          `
        case 'Beverages':
          return css`
            span {
              color: rgb(97, 105, 131);
            }
          `
        case 'Dessert':
          return css`
            span {
              color: rgb(98, 81, 118);
            }
          `
        case 'Snack':
          return css`
            span {
              color: rgb(168, 71, 36);
            }
          `
        default:
          return css`
            span {
              color: rgb(86, 59, 39);
            }
          `
      }
    }}
  }
`
