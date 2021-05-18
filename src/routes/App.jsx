import React from 'react'
import Home from '../containers/Home'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { GlobalStyles } from '../GlobalStyles'
import QuizPage from '../containers/QuizPage'
function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/:category/:id' component={QuizPage} />
        <Redirect to='/' />
      </Switch>
    </BrowserRouter>
  )
}

export default App
