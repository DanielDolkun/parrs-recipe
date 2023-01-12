import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 95%;
  height: 12rem;
  position: relative;
  display: flex;
  align-items: center;
  margin: 1.5rem 0;
  border-width: 0.2rem;
  border-style: solid;
  border-color: rgb(192, 155, 81);
  img {
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  h2 {
    position: absolute;
    width: 100%;
    z-index: 5;
    text-align: right;
    margin: 1rem 0;
    padding-right: 0.7rem;
    font-size: 2rem;
    font-family: 'Kalam', cursive;
    color: rgb(255, 235, 194);
    text-shadow: 4px 4px rgba(68, 43, 12, 0.933);
  }
  @media only screen and (max-width: 906px) {
    h2 {
      font-size: 1.5rem;
    }
  }
  @media only screen and (max-width: 550px) {
    h2 {
      font-size: 1.5rem;
    }
  }
  @media only screen and (max-width: 330px) {
    h2 {
      font-size: 1rem;
    }
  } ;
`

export const Gradient = styled.div`
  width: 100%;
  height: 100%;
  z-index: 2;
  background: linear-gradient(
    to right,
    rgba(191, 176, 147, 0.2),
    rgba(159, 116, 63, 0.846)
  );
`
