import Footer from 'components/Footer'
import Header from 'components/Header'
import About from 'pages/About/About'
import Home from 'pages/Home/Home'

import { Route, Routes } from 'react-router-dom'

import '../../styles/App.scss'

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <div className='main'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
