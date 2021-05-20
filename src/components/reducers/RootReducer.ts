export interface RootReducerProps {
  category: string
  answer: number
  score: number
  questions: number
}
const INITIAL_STATE: RootReducerProps = {
  category: '',
  answer: 1,
  score: 0,
  questions: 0
}
interface ActionCategory {
  type: 'SAVE_CATEGORY'
  payload: string
}
interface ActionAnswer {
  type: 'SAVE_ANSWER'
  payload: number
}
interface ActionQuestions {
  type: 'SAVE_QUESTIONS'
  payload: number
}
interface ActionScore {
  type: 'ADD_SCORE'
  payload: number
}
interface ActionRestart {
  type: 'RESTART'
}

type Action =
  | ActionCategory
  | ActionAnswer
  | ActionQuestions
  | ActionScore
  | ActionRestart

export const RootReducer = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case 'SAVE_CATEGORY':
      return { ...state, category: action.payload }
    case 'SAVE_ANSWER':
      return { ...state, answer: action.payload }
    case 'SAVE_QUESTIONS':
      return { ...state, questions: action.payload }
    case 'ADD_SCORE':
      return { ...state, score: action.payload }
    case 'RESTART':
      return {
        ...state,
        category: '',
        answer: 1,
        current: 1,
        score: 0,
        questions: 0
      }
    default:
      return state
  }
}
