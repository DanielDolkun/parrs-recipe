import styled from 'styled-components'

export const SearchDiv = styled.div`
  width: 100%;
  height: 2rem;
  display: flex;
  margin: 1rem 1.3rem;
  justify-content: center;
  align-items: center;
`
export const SForm = styled.form`
  width: 100%;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const SearchInput = styled.input`
  height: 100%;
  width: 30rem;
  font-size: 1.2rem;
  border: none;
  color: rgb(253, 215, 138);
  background-color: rgba(85, 85, 85, 0.8);
  :focus {
    border: solid 2px rgb(178, 143, 74);
    outline: none;
  }
`
