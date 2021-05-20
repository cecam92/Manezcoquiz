import React, { useEffect } from 'react'
import { Title, MainContainer } from '../../GlobalStyles'
import QuestionComponent from '../../components/QuestionComponent'
import QuestionNumber from '../../components/QuestionNumber'
import { questions } from '../../components/data'
import { useParams } from 'react-router'
import { useDispatch } from 'react-redux'

interface ParamsProps {
  category: string
  id: string
}
const QuizPage = () => {
  const { category, id } = useParams<ParamsProps>()
  const data = questions.find((el) => el.category === category)
  const questionArray = data!.questions.find((el) => el.id === +id)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({
      type: 'SAVE_QUESTIONS',
      payload: data!.questions.length
    })
  }, [data, dispatch])
  return (
    <MainContainer>
      <Title>{category}</Title>
      <QuestionNumber data={data?.questions.length || 0} />
      <QuestionComponent data={questionArray!} />
    </MainContainer>
  )
}

export default QuizPage
