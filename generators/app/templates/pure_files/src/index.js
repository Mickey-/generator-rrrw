import 'normalize.css/normalize.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux'

import Header from './components/Header'
import App from './containers/App'
import createStore from './store'

const store = createStore()
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} />
      <Route path="/header" component={Header} />
    </Router>
  </Provider>,
  document.getElementById('root')
)
