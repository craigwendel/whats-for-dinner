import React from 'react'
import ReactDOM from 'react-dom'

import './styles/index.css'
import registerServiceWorker from './registerServiceWorker'

import {BrowserRouter, Switch, Route} from 'react-router-dom'
import App from './components/App'
import BaseLayout from './components/BaseLayout'
import SignUp from './components/SignUp'
import Login from './components/Login'
import Recipes from './components/Recipes'

ReactDOM.render(

  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path='/' component={App} />
        <Route path='/signup' component={SignUp} />
        <Route path='/login' component={Login} />
        <Route path='/recipes' component={Recipes} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>

  , document.getElementById('root'))
registerServiceWorker()
