'use strict'
import React from 'react'
import { Router, Route, IndexRedirect, browserHistory } from 'react-router'
import { render } from 'react-dom'

import { Provider } from 'react-redux'
import store from './store'

//React components and views needed for routes
import NotFound from './components/NotFound'
import App from './components/App'
import HomeView from './components/HomeView'
import TargetView from './components/TargetView'

import { setCurrentTarget } from './reducers/targetsReducer.js'

const setCurrTargetId = (props) => {
  store.dispatch(setCurrentTarget(props.params.id))
}

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App} >
        <Route path='home' component={HomeView} />
        <Route path='target/:id' component={TargetView} onEnter={setCurrTargetId} />
        <IndexRedirect to="home" />
      </Route>
      <Route path='/*' component={NotFound} />
    </Router>
   </Provider>,
 document.getElementById('main')
)
