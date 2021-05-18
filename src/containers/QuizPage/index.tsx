import React, { useEffect } from 'react'
import { Title, MainContainer } from '../../GlobalStyles'
import QuestionComponent from '../../components/QuestionComponent'
import QuestionNumber from '../../components/QuestionNumber'
import { questions } from '../../components/data'
import { useHistory, useParams } from 'react-router'
import { useSelector } from 'react-redux'

interface ParamsProps {
  category: string
  id: string
}
const QuizPage = (props: any) => {
  const { category, id } = useParams<ParamsProps>()
  const answer = useSelector((state: any) => state.answer)
  const history = useHistory()

  console.log(useParams())
  const data = questions.find((el) => el.category === category)
  const questionArray = data!.questions.find((el) => el.id === +id)

  useEffect(() => {
    if (id > answer) {
      history.push(`/${category}/${answer}`)
    }
  }, [answer, category, history, id])

  return (
    <MainContainer>
      <Title>{category}</Title>
      <QuestionNumber data={data?.questions.length || 0} />
      <QuestionComponent data={questionArray!} />
      <p>{`answer ${id}`}</p>
    </MainContainer>
  )
}

export default QuizPage
