import styled, { css } from 'styled-components'

export const SearchButton = styled.button`
  margin: 0.5rem 0;
  width: 3.5rem;
  height: 100%;
  background-color: rgb(252, 208, 121);
  border: solid 3px rgb(178, 143, 74);
  cursor: pointer;
`
export const RegularButton = styled.button`
  margin: 0 0.5rem 0.5rem 0.5rem;
  padding: 0.5rem;
  width: fit-content;
  height: 100%;
  font-family: 'Kalam', cursive;
  font-size: 1.2rem;
  color: rgb(254, 221, 153);
  text-shadow: 2px 2px rgb(99, 80, 41);
  ${(props) => {
    if (props.active) {
      return css`
        background: linear-gradient(to top, rgb(243, 203, 125), #4a4a4a04);
      `
    } else {
      return css`
        background: linear-gradient(to top, rgb(119, 119, 119), #4a4a4a04);
      `
    }
  }};
  border: solid 2px rgb(243, 203, 125);
  cursor: pointer;
`
