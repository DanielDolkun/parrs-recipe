import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right, rgba(69, 50, 10, 0.834), #292929);
  width: 100%;
  height: 100%;
`
export const CategoryTitle = styled.h2`
  font-family: 'Caveat', cursive;
  color: rgb(192, 155, 81);
  text-shadow: 4px 4px rgba(68, 43, 12, 0.933);
  font-size: 4rem;
  width: 95%;
  padding: 1rem 0;
  text-align: left;
  @media only screen and (max-width: 550px) {
    font-size: 3rem;
  } ;
`
