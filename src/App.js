import { useState } from 'react'
//Homes is link to Hero which is the css part
import Home from './Home'
import NavBar from './NavBar'
import Dashboard from './Dashboard'
//react routing between pages
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  )
}

export default App

//this is where everything interacts
