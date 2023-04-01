import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/App'
import { HashRouter as Router } from 'react-router-dom'
import ScrollToTop from 'utils/scrollToTop'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router basename='/'>
      <ScrollToTop />
      <App />
    </Router>
  </React.StrictMode>
)
