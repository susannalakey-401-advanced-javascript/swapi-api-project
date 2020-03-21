import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import History from '../History/History'
import Navbar from '../Navbar/Navbar'
import App from '../App/App'

const Router = () => {
  return (

    // this will act as base route for all routes
    <HashRouter basename="/">
      <Navbar />
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/history" component={History} />
      </Switch>
    </HashRouter >
  )
}

export default Router

// render() {
//   return (
//    <HashRouter basename='/'>
//     <div>
//      <ul>
//       <li><Link to="/">Home</Link></li>
//       <li><Link to="/about">About</Link></li>
//      </ul>
//      <hr />
//      <Route exact path="/" component={Home} />
//      <Route path="/about" component={About} />
//     </div>
//    </HashRouter>
//   );
//  }