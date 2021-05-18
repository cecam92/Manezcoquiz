import { createStore } from 'redux'
import { RootReducer } from './components/reducers/RootReducer'

export const store = createStore(RootReducer)
