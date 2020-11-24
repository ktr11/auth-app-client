import React, { useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './components/Home'
import Dashboard from './components/Dashboard'

export default function App() {
  const [loggedInStatus, setLoggedInStatus] = useState("未ログイン")
  const [user, setUser] = useState({})
  const handleLogin = (data) => {
    setLoggedInStatus("ログインなう")
    setUser(data.user)
  }
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route
            exact path={"/"}
            render={props => (
              <Home {...props} handleLogin={handleLogin} loggedInStatus={loggedInStatus} />
            )}
          />
          <Route
            exact path={"/dashboard"}
            render={props => (
              <Dashboard {...props} loggedInStatus={loggedInStatus} />
            )}
          />
        </Switch>
      </BrowserRouter>
    </div>
  )
}