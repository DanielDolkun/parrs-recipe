import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const SearchContainer = styled.div`
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

export const SearchPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right, rgba(69, 50, 10, 0.834), #292929);
  width: 100%;
  height: 100%;
`
export const RLink = styled(Link)`
  width: 100%;
  display: flex;
  justify-content: center;
`
