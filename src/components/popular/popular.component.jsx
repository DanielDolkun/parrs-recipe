import React, { useEffect, useState } from 'react'
import { getType } from '../../utils/fetch.utils'
import PopularCard from '../popular-card/popular-card.component'
import { PLink } from './popular.styles'

const Popular = () => {
  const [popular, setPopular] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const result = await getType('popular')
      setPopular(result.recipes)
    }
    fetchData()
  }, [])

  return (
    <>
      {popular.map((item) => {
        return (
          <PLink to={'/recipe/' + item.id} key={item.id}>
            <PopularCard title={item.title} imageUrl={item.image} />
          </PLink>
        )
      })}
    </>
  )
}

export default Popular
