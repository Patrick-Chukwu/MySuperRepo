import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import  About from './pages/About'
import Contact from './pages/Contact'
import Home  from './pages/Home'
import NoPage  from './pages/NoPage'


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NoPage />} />




      </Routes>
      
      </BrowserRouter>
    </div>
  )
}

export default App