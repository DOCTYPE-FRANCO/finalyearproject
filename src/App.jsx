import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './Components/Homepage'
import Header from './Components/Header'
import Election from './Components/Election'
import Footer from './Components/Footer'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/election' element={<Election />} />
      </Routes>
      <Footer/ >
    </div>
  )
}

export default App
