import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import store from './App/redux/store'

import Main from './App/contianers/Main/Main'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
