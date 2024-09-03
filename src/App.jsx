import React, { useState } from 'react'
import Form from './components/Form'
import Login from './components/Login'
import Pictures from './components/picture'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={
            <React.Fragment>
              <Pictures />
              <Footer />
            </React.Fragment>
          } />

          {/* <Login /> */}
          {/* <Form /> */}
          <Route path="/login" element={<Login />} />

        </Routes>


      </Router>
    </>
  )
}

export default App
