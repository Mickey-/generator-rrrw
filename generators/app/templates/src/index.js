<% if (mobileORpc == 'PC') { %>import 'normalize.css/normalize.css'
<% } else { %>import 'm-base/index.less'
import FastClick from 'fastclick'
FastClick.attach(document.body)
<% } %>
import './base.less'
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux'
import createStore from './store'
// 按需增删改 start
import RouteTest from './components/RouteTest'
import App from './containers/App'
// 按需增删改 end

const store = createStore()
const history = syncHistoryWithStore(hashHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} />
      <Route path="/routetest" component={RouteTest} />
    </Router>
  </Provider>,
  document.getElementById('root')
)
