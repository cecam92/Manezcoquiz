import React from 'react'
import { useHistory, useParams } from 'react-router'
import { MainContainer, Title } from '../../GlobalStyles'
import { ResultContainer, Score, Button } from './styles'
import { useDispatch, useSelector } from 'react-redux'

type ParamsProps = {
  category: string
}
const Result = () => {
  const { category } = useParams<ParamsProps>()
  const history = useHistory()
  const dispatch = useDispatch()
  const totalQuestions = useSelector((state: any) => state.questions)
  const score = useSelector((state: any) => state.score)

  const handleClick = () => {
    dispatch({
      type: 'RESTART'
    })
    history.push('/')
  }

  return (
    <MainContainer>
      <Title>{category}</Title>
      <ResultContainer>
        <Score>{`${score}/${totalQuestions}`}</Score>
        <Button onClick={handleClick}>Start Again</Button>
      </ResultContainer>
    </MainContainer>
  )
}

export default Result
