export interface RootReducerProps {
  category: string
  answer: number
  current: number
  score: number
}
const INITIAL_STATE: RootReducerProps = {
  category: '',
  answer: 1,
  current: 1,
  score: 0
}
interface ActionCategory {
  type: 'SAVE_CATEGORY'
  payload: string
}
interface ActionQuestion {
  type: 'SAVE_QUESTION'
  payload: number
}
interface ActionCurrent {
  type: 'SAVE_CURRENT'
  payload: number
}
interface ActionScore {
  type: 'ADD_SCORE'
  payload: number
}

type Action = ActionCategory | ActionQuestion | ActionCurrent | ActionScore

export const RootReducer = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case 'SAVE_CATEGORY':
      return { ...state, category: action.payload }
    case 'SAVE_QUESTION':
      return { ...state, answer: action.payload }
    case 'SAVE_CURRENT':
      return { ...state, current: action.payload }
    case 'ADD_SCORE':
      return { ...state, score: action.payload }
    default:
      return state
  }
}
