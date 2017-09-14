import React from 'react'
import ReactDOM from 'react-dom'

import './styles/index.css'
import registerServiceWorker from './registerServiceWorker'

import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Homepage from './components/Homepage'
import BaseLayout from './components/BaseLayout'
import SignUp from './components/SignUp'
import Login from './components/Login'
import RecipeSearch from './components/RecipeSearch'
import Menu from './components/Menu'

ReactDOM.render(

  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/signup' component={SignUp} />
        <Route path='/login' component={Login} />
        <Route path='/recipes' component={RecipeSearch} />
        <Route path='/menu' component={Menu} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>

  , document.getElementById('root'))
registerServiceWorker()
