import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './Components/Homepage'
import Header from './Components/Header'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
      </Routes>
    </div>
  )
}

export default App
