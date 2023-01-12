import styled from 'styled-components'

export const MainSecContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  padding: 2rem;
  img {
    width: 45rem;
    height: 25rem;
    object-fit: cover;
    align-self: left;
    margin-bottom: 2rem;
    border: solid 0.2rem rgb(192, 155, 81);

    @media only screen and (max-width: 750px) {
      width: 30rem;
      height: 15rem;
      align-self: center;
    }
    @media only screen and (max-width: 530px) {
      width: 25rem;
      height: 10rem;
      align-self: center;
    }
    @media only screen and (max-width: 430px) {
      width: 20rem;
      height: 10rem;
      align-self: center;
    }
  }
  p {
    font-family: 'Rubik', sans-serif;
    color: #e6b86d;
    font-size: 1.2rem;
    line-height: 1.7rem;
    text-shadow: 1px 1px #785e36;
  }
  a {
    text-decoration: none;
    color: #f0db7b;
  }
  @media only screen and (max-width: 1110px) {
    width: 100%;
    img {
      align-self: center;
    }
  }
`
