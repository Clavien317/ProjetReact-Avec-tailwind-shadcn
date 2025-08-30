import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Contact from './pages/Contact'
import Home from './pages/Home'


function App() {
  return (
    <div>
      <Router >
        <Routes>
          <Route element={<Home />} path='/' />
          <Route element={<Contact />} path='/contact' />
        </Routes>
      </Router>
    </div>
  )
}

export default App