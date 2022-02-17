import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './App'
import { store } from './app/store'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename='/phlaunt-web-02'>
        <Routes>
          <Route path="/" element={<Navigate to="/app" />} />
          <Route path="/app" element={<App />} />

          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
