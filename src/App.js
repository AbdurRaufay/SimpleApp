import React from 'react'
import Edit from './Edit'
import ShowArticle from './ShowArticle'
import AddArticle from './AddArticle'
import Register from './Register'
import Login from './Login'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
const App = () => {
  return (
         <div>
    <Router>
      <Switch>
        <Route path="/" exact>
          <ShowArticle />
        </Route>
        <Route path="/edit">
          <Edit />
          </Route>
          <Route path="/add">
            <AddArticle />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
      </Switch>
    </Router>
  </div>
  )}
export default App;