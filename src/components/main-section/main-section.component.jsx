import React from 'react'
import { MainSecContainer } from './main-section.styles'

function MainSection({ imageUrl, description, title }) {
  return (
    <MainSecContainer>
      <img src={imageUrl} alt={title} />
      <p dangerouslySetInnerHTML={{ __html: description }}></p>
    </MainSecContainer>
  )
}

export default MainSection
