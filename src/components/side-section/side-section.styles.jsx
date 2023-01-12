import styled, { css } from 'styled-components'

export const SideSecContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 30%;
  height: 100%;
  margin: 2rem 2rem 2rem 0;
  @media only screen and (max-width: 1110px) {
    width: 100%;
  }
`

export const SideContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(to top, rgba(243, 204, 125, 0.687), #4a4a4a04);
  border: solid 2px rgb(243, 203, 125);
  margin: 1rem 0.5rem;
  padding: 1rem;
  div {
    margin: 0.7rem 0;
  }
  @media only screen and (max-width: 1110px) {
    width: 100%;
  }
  ${(props) => {
    if (!props.stepsClicked) {
      return css`
        @media only screen and (max-width: 1110px) {
          width: 70%;
        }
      `
    }
  }}
`
export const SideSecSpan = styled.span`
  font-family: 'Rubik', sans-serif;
  font-size: 1.3rem;
  ${(props) => {
    if (props.highlight) {
      return css`
        color: rgb(255, 242, 157);
      `
    } else {
      return css`
        color: rgb(251, 237, 209);
      `
    }
  }}
  text-shadow: 2px 2px rgb(99, 80, 41);
`
