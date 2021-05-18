import React from 'react'
import { QuestionNumberContainer, Question } from './styles'
import { useHistory, useParams } from 'react-router'
import { useSelector } from 'react-redux'
interface QuestionNumberProps {
  data: number
}
interface ParamsProps {
  category: string
}

const QuestionNumber = ({ data }: QuestionNumberProps) => {
  const history = useHistory()
  const { category } = useParams<ParamsProps>()
  const answer = useSelector((state: any) => state.answer)

  const handleClick = (question: number) => {
    if (question <= answer) {
      history.push(`/${category}/${question}`)
    }
  }
  return (
    // TODO: onClick
    <QuestionNumberContainer>
      {Array.from(Array(data).keys()).map((el, index) => (
        <Question
          key={index}
          onClick={() => {
            handleClick(el + 1)
          }}
        >
          {el + 1}
        </Question>
      ))}
    </QuestionNumberContainer>
  )
}

export default QuestionNumber
