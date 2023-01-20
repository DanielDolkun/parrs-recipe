import styled from 'styled-components'

export const RecipeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to top, rgba(141, 115, 63, 0.834), #292929);
  width: 100%;
  height: 100%;
  padding: 1rem;
`
export const DetailSectionsContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  @media only screen and (max-width: 1110px) {
    flex-direction: column;
  }
`

export const HeadSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  h2 {
    font-family: 'Caveat', cursive;
    color: rgb(217, 179, 101);
    text-shadow: 4px 4px rgba(92, 58, 17, 0.933);
    font-size: 3rem;
    width: 95%;
    padding: 1rem 0;
    text-align: left;
  }
`
