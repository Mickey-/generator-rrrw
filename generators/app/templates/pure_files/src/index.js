import 'normalize.css/normalize.css'
import './base.less'
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux'

import RouteTest from './components/RouteTest'
import App from './containers/App'
import createStore from './store'

const store = createStore()
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} />
      <Route path="/routetest" component={RouteTest} />
    </Router>
  </Provider>,
  document.getElementById('root')
)
