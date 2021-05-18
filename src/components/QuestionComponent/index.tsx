import React, { useEffect, useState } from 'react'
import { QuestionContainer } from './styles'
import { ListContainer } from '../../GlobalStyles'
import OptionItem from '../../components/OptionItem'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router'

interface QuestionComponentProps {
  data: QuestionType
}

export type QuestionType = {
  id: number
  question: string
  options: string[]
  answer: string
}

interface ParamsProps {
  category: string
}

const QuestionComponent = ({ data }: QuestionComponentProps) => {
  const id = data.id
  const question = data.question
  const options = data.options
  const answer = data.answer
  const score = useSelector(({ score }: any) => score)
  const answerState = useSelector(({ answer }: any) => answer)
  const [isDisabled, setIsDisabled] = useState(false)
  const { category } = useParams<ParamsProps>()

  const dispatch = useDispatch()
  const history = useHistory()

  const handleClick = (label: string) => {
    checkAnswer(label)
    dispatch({
      type: 'SAVE_QUESTION',
      payload: id ? id + 1 : 1
    })
    history.push(`/${category}/${id + 1}`)
  }
  console.log(isDisabled)
  const checkAnswer = (data: string) => {
    const currentScore: number = score
    console.log(currentScore + 1)
    if (data === answer) {
      dispatch({
        type: 'ADD_SCORE',
        payload: currentScore + 1
      })
    }
  }

  useEffect(() => {
    answerState > id ? setIsDisabled(true) : setIsDisabled(false)
  }, [answerState, id])

  return (
    <>
      <QuestionContainer>{question}</QuestionContainer>
      <ListContainer>
        {isDisabled
          ? options?.map((el, index) => (
              <OptionItem key={`${id}-${index}`} label={el} disabled />
            ))
          : options?.map((el, index) => (
              <OptionItem
                key={`${id}-${index}`}
                label={el}
                onClick={() => {
                  handleClick(el)
                }}
              />
            ))}
        {}
      </ListContainer>
      <p>{`Score ${score}`}</p>
    </>
  )
}

export default QuestionComponent
