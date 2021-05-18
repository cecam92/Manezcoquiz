import React from 'react'
import { CategoriesContainer } from './styles'
import OptionItem from '../OptionItem'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { Title, ListContainer } from '../../GlobalStyles'
import { Link } from 'react-router-dom'

import { categories } from '../data'

const Categories = () => {
  return (
    <CategoriesContainer>
      <Title>Select a topic</Title>
      <ListContainer>
        {categories.map((el, index) => (
          <Link
            to={{
              pathname: `/${el}/1`
            }}
          >
            <OptionItem key={index} label={el} icon={faCoffee} />
          </Link>
        ))}
      </ListContainer>
    </CategoriesContainer>
  )
}

export default Categories
