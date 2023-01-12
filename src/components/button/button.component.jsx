import React from 'react'
import { RegularButton, SearchButton } from './button.styles'

function Button({ type = '' }) {
  return <>{type === 'search' ? <SearchButton /> : <RegularButton />}</>
}

export default Button
