import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SearchButton } from '../button/button.styles'
import { SearchDiv, SearchInput, SForm } from './search-bar.styles'

const SearchBar = () => {
  const [input, setInput] = useState('')
  const navigate = useNavigate()

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/searched/' + input)
    setInput('')
  }

  return (
    <SearchDiv>
      <SForm onSubmit={handleSubmit}>
        <SearchInput type='text' onChange={handleChange} value={input} />
        <SearchButton>
          <span className='material-symbols-outlined'>search</span>
        </SearchButton>
      </SForm>
    </SearchDiv>
  )
}

export default SearchBar
