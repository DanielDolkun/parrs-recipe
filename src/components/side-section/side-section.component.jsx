import React, { useState } from 'react'
import { RegularButton } from '../button/button.styles'
import {
  SideContentContainer,
  SideSecContainer,
  SideSecSpan,
} from './side-section.styles'

const SideSection = ({ ingredients, instructions }) => {
  const [stepsClicked, setStepsClicked] = useState(false)
  const [ingredientsClicked, setIngredientsClicked] = useState(true)
  let i = 0

  return (
    <SideSecContainer>
      <div>
        <RegularButton
          onClick={() => {
            setStepsClicked(false)
            setIngredientsClicked(true)
          }}
          active={ingredientsClicked}
        >
          Ingredients
        </RegularButton>
        <RegularButton
          onClick={() => {
            setStepsClicked(true)
            setIngredientsClicked(false)
          }}
          active={stepsClicked}
        >
          Steps
        </RegularButton>
      </div>
      <SideContentContainer stepsClicked={stepsClicked}>
        {stepsClicked
          ? instructions.steps.map(({ number, step }) => {
              return (
                <div key={number}>
                  <SideSecSpan highlight={true}>{number}. </SideSecSpan>
                  <SideSecSpan highlight={false}>{step}</SideSecSpan>
                </div>
              )
            })
          : ingredients.map(({ name, amount }) => {
              return (
                <div key={i++}>
                  <SideSecSpan highlight={false}>{name}: </SideSecSpan>
                  <SideSecSpan highlight={true}>{amount}</SideSecSpan>
                </div>
              )
            })}
      </SideContentContainer>
    </SideSecContainer>
  )
}

export default SideSection
