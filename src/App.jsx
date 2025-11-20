import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './Components/Homepage'
import Header from './Components/Header'
import Election from './Components/Election'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/election' element={<Election />} />
      </Routes>
    </div>
  )
}

export default App
