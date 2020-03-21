
import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import History from '../History/History'
import Navbar from '../Navbar/Navbar'
import App from '../App/App'

const Router = () => {
  return (
    <HashRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <App />
        </Route>
        <Route path="/history" exact>
          <History />
        </Route>
      </Switch>
    </HashRouter>
  )
}

export default Router