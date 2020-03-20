import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import History from '../History/History'
import Navbar from '../Navbar/Navbar'
import App from '../App/App'

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <App />
        </Route>
        <Route path="/history" exact>
          <History />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router