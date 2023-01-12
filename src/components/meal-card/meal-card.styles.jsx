import styled from 'styled-components'

export const MealIntroCard = styled.div`
  width: 100%;
  height: 12rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #eba062;
  border: solid 0.2rem rgb(192, 155, 81);
  h2 {
    position: absolute;
    width: 100%;
    z-index: 5;
    text-align: center;
    margin: 1rem 0;
    padding-right: 0.7rem;
    font-size: 1.2rem;
    font-family: 'Kalam', cursive;
    color: rgb(255, 235, 194);
    text-shadow: 3px 3px rgba(68, 43, 12, 0.933);
  }
  img {
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const MealIntroCardGradient = styled.div`
  width: 100%;
  height: 100%;
  z-index: 2;
  background: linear-gradient(
    to bottom,
    rgba(191, 176, 147, 0.2),
    rgba(159, 116, 63, 0.846)
  );
`
