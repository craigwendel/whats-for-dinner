import React from 'react'
import ReactDOM from 'react-dom'

import './styles/index.css'
import registerServiceWorker from './registerServiceWorker'

import {BrowserRouter, Switch, Route} from 'react-router-dom'
import App from './components/App'
import BaseLayout from './components/BaseLayout'

ReactDOM.render(

<BrowserRouter>
  <BaseLayout>
    <Switch>
      <Route exact path='/' component={App} />
    </Switch>
  </BaseLayout>
</BrowserRouter>

  , document.getElementById('root'))
registerServiceWorker()
